const path = require('path');
const express = require('express');
const session = require('express-session');
require('dotenv').config();

// MongoDB connection
const connectDB = require('./config/db');

// Models
const User = require('./models/User');
const Event = require('./models/Event');

const app = express();

// Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname)));

app.use(
	session({
		secret: process.env.SESSION_SECRET || 'change-me',
		resave: false,
		saveUninitialized: false,
		cookie: { httpOnly: true, sameSite: 'lax' }
	})
);

// Initialize default event if database is empty
async function initializeDefaultEvent() {
	try {
		const eventCount = await Event.countDocuments();
		if (eventCount === 0) {
			await Event.create({
				title: 'Emergency Management In Ayurveda',
				description: 'Join us for an exclusive offline seminar in Bhopal designed for Ayurveda students and practitioners. Learn how to effectively bridge classical Ayurvedic wisdom with modern medical tools and diagnostic techniques.',
				date: '9th November 2025',
				venue: 'Vigyan Bhawan, MPCST',
				speaker: 'Dr. Anuj Jain'
			});
			console.log('✅ Default event created');
		}
	} catch (error) {
		console.error('❌ Error initializing default event:', error.message);
	}
}


// Routes
app.get('/', async (req, res) => {
	try {
		const events = await Event.find().sort({ createdAt: -1 });
		res.render('index', { title: 'Shree Vishwa Asha Ayurvedic Panchakarma Centre', events });
	} catch (error) {
		console.error('Error fetching events:', error);
		res.render('index', { title: 'Shree Vishwa Asha Ayurvedic Panchakarma Centre', events: [] });
	}
});

// eBook access form
app.get('/ebook-access', (req, res) => {
	res.render('ebook-access', { title: 'Access eBook' });
});

app.post('/ebook-access', async (req, res) => {
	const { fullName, email, mobile, college, city, state } = req.body;
	if (!fullName || !email || !mobile) {
		return res.status(400).render('ebook-access', { title: 'Access eBook', error: 'Please fill required fields.' });
	}
	try {
		await User.create({
			fullName,
			email,
			mobile,
			college: college || '',
			city: city || '',
			state: state || ''
		});
		req.session.canViewEbook = true;
		res.redirect('/ebook');
	} catch (error) {
		console.error('Error saving user:', error);
		res.status(500).render('ebook-access', { title: 'Access eBook', error: 'An error occurred. Please try again.' });
	}
});

// Guarded eBook viewer
app.get('/ebook', (req, res) => {
	if (!req.session.canViewEbook) return res.redirect('/ebook-access');
	res.render('ebook', { title: 'eBook' });
});

// Admin auth
function requireAdmin(req, res, next) {
	if (req.session && req.session.isAdmin) return next();
	return res.redirect('/admin/login');
}

app.get('/admin/login', (req, res) => {
	res.render('admin-login', { title: 'Admin Login', error: null });
});

app.post('/admin/login', (req, res) => {
	const { username, password } = req.body;
	if (
		username === (process.env.ADMIN_USER || 'admin') &&
		password === (process.env.ADMIN_PASS || 'password')
	) {
		req.session.isAdmin = true;
		return res.redirect('/admin');
	}
	res.status(401).render('admin-login', { title: 'Admin Login', error: 'Invalid credentials' });
});

app.get('/admin/logout', (req, res) => {
	req.session.isAdmin = false;
	res.redirect('/admin/login');
});

app.get('/admin', async (req, res) => {
    if (req.session.isAdmin) {
        try {
            const users = await User.find().sort({ createdAt: -1 });
            const events = await Event.find().sort({ createdAt: -1 });
            res.render('admin-dashboard', { title: 'Admin Dashboard', users, events });
        } catch (error) {
            console.error('Error fetching admin data:', error);
            res.status(500).render('admin-dashboard', { title: 'Admin Dashboard', users: [], events: [] });
        }
    } else {
        res.redirect('/admin/login');
    }
});

app.get('/admin/download-csv', requireAdmin, async (req, res) => {
	try {
		const users = await User.find().sort({ createdAt: -1 });
		res.setHeader('Content-Type', 'text/csv');
		res.setHeader('Content-Disposition', 'attachment; filename="users.csv"');
		
		// CSV header
		res.write('fullName,email,mobile,college,city,state,createdAt\n');
		
		// CSV rows
		users.forEach(user => {
			const values = [
				user.fullName,
				user.email,
				user.mobile,
				user.college || '',
				user.city || '',
				user.state || '',
				user.createdAt.toISOString()
			].map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',');
			res.write(values + '\n');
		});
		
		res.end();
	} catch (error) {
		console.error('Error generating CSV:', error);
		res.status(500).send('Error generating CSV');
	}
});

app.get('/admin/download-json', requireAdmin, async (req, res) => {
	try {
		const users = await User.find().sort({ createdAt: -1 });
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Content-Disposition', 'attachment; filename="users.json"');
		res.send(JSON.stringify(users, null, 2));
	} catch (error) {
		console.error('Error generating JSON:', error);
		res.status(500).send('Error generating JSON');
	}
});

// Event Management Routes
app.post('/admin/events/add', requireAdmin, async (req, res) => {
	const { title, description, date, venue, speaker } = req.body;
	if (!title || !date || !venue) {
		return res.status(400).json({ error: 'Title, date, and venue are required' });
	}
	try {
		const newEvent = await Event.create({
			title,
			description: description || '',
			date,
			venue,
			speaker: speaker || ''
		});
		res.json({ success: true, event: newEvent });
	} catch (error) {
		console.error('Error creating event:', error);
		res.status(500).json({ error: 'Failed to create event' });
	}
});

app.post('/admin/events/update/:id', requireAdmin, async (req, res) => {
	const { id } = req.params;
	const { title, description, date, venue, speaker } = req.body;
	try {
		const event = await Event.findById(id);
		if (!event) {
			return res.status(404).json({ error: 'Event not found' });
		}
		
		if (title) event.title = title;
		if (description !== undefined) event.description = description;
		if (date) event.date = date;
		if (venue) event.venue = venue;
		if (speaker !== undefined) event.speaker = speaker;
		
		await event.save();
		res.json({ success: true, event });
	} catch (error) {
		console.error('Error updating event:', error);
		res.status(500).json({ error: 'Failed to update event' });
	}
});

app.post('/admin/events/delete/:id', requireAdmin, async (req, res) => {
	const { id } = req.params;
	try {
		const event = await Event.findByIdAndDelete(id);
		if (!event) {
			return res.status(404).json({ error: 'Event not found' });
		}
		res.json({ success: true });
	} catch (error) {
		console.error('Error deleting event:', error);
		res.status(500).json({ error: 'Failed to delete event' });
	}
});

// Fallback
app.use((req, res) => res.status(404).render('404', { title: 'Not Found' }));

// Connect to MongoDB and start server
const PORT = process.env.PORT || 3000;

async function startServer() {
	try {
		await connectDB();
		await initializeDefaultEvent();
		app.listen(PORT, () => {
			console.log(`✅ Server running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error('❌ Failed to start server:', error);
		process.exit(1);
	}
}

startServer();


