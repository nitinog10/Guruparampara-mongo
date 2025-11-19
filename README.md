<<<<<<< HEAD
# Guruparampara-mongo
=======
<<<<<<< HEAD
# Shree Vishva Ayurved Clinic — GuruParampara

A modern Ayurvedic clinic website with eBook access flow and admin dashboard for managing user submissions.

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd "Guru Parampara"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   PORT=3000
   SESSION_SECRET=your-super-secret-session-key
   ADMIN_USER=admin
   ADMIN_PASS=your-secure-password
   ```

4. Start the server:
   ```bash
   npm run start
   ```

5. Open `http://localhost:3000` in your browser

### Development Mode (with auto-reload)
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with:

- `PORT` - Server port (default: 3000)
- `SESSION_SECRET` - Secret key for session encryption (required in production)
- `ADMIN_USER` - Admin login username (default: admin)
- `ADMIN_PASS` - Admin login password (change this!)

**Important:** Never commit your `.env` file to git. Use `.env.example` as a template.

## Project Structure

```
├── app.js              # Main Express application
├── package.json        # Dependencies and scripts
├── views/              # EJS templates
│   ├── index.ejs       # Homepage
│   ├── ebook-access.ejs
│   ├── ebook.ejs
│   ├── admin-*.ejs
│   └── partials/       # Header and footer
├── public/             # Static assets
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── ebook.pdf       # eBook file (add your PDF here)
├── data/               # User data storage (git-ignored)
│   ├── users.json      # JSON database
│   └── users.csv       # CSV export
└── images/             # Image assets
```

## Features

- **Homepage**: Modern, responsive design showcasing clinic services
- **eBook Access**: Form-based access control with user data collection
- **Admin Dashboard**: View and download user submissions
- **Data Storage**: File-based storage (JSON + CSV) suitable for low-medium traffic

## Admin Access

1. Login: `http://localhost:3000/admin/login`
2. Dashboard: `http://localhost:3000/admin`
3. Download CSV: `http://localhost:3000/admin/download-csv`

## Deployment to Render

### Step 1: Push to GitHub

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `guru-parampara-clinic` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave empty (or `.` if needed)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

5. **Set Environment Variables** (in Render dashboard):
   - `PORT` - Leave empty (Render sets this automatically)
   - `SESSION_SECRET` - Generate a random secret: `openssl rand -base64 32`
   - `ADMIN_USER` - Your admin username
   - `ADMIN_PASS` - Your secure admin password

6. **Advanced Settings**:
   - Enable "Auto-Deploy" for automatic deployments on git push
   - Plan: Free tier is sufficient for low traffic

7. Click "Create Web Service"

### Step 3: Data Persistence

Render's free tier includes persistent disk storage. The `data/` folder will automatically persist across deployments and restarts.

**Important Notes:**
- User data files (`data/users.json`, `data/users.csv`) are git-ignored
- Data persists on Render's persistent disk
- The `data/` folder is created automatically on first run
- Back up your data regularly using the admin CSV export feature

### Step 4: Custom Domain (Optional)

1. In Render dashboard → Settings → Custom Domains
2. Add your domain
3. Follow DNS configuration instructions

## Alternative: Railway Deployment

Railway also offers free tier with persistent storage:

1. Go to [Railway](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set environment variables
5. Railway auto-detects Node.js and deploys

## Troubleshooting

### Data not persisting?
- Ensure `data/` folder exists in your project
- Check Render/Railway logs for file system errors
- Verify environment variables are set correctly

### Admin login not working?
- Check `ADMIN_USER` and `ADMIN_PASS` environment variables
- Clear browser cookies and try again

### Port issues?
- Render/Railway sets `PORT` automatically - don't hardcode it
- Use `process.env.PORT || 3000` in your code (already done)

## Data Backup

**Recommended backup strategy:**
1. Regularly export data via admin dashboard (`/admin/download-csv`)
2. Store backups in a secure location
3. Consider automated backups for production

## Security Notes

- Change default admin credentials in production
- Use strong `SESSION_SECRET` (32+ characters)
- Enable HTTPS (automatic on Render/Railway)
- Review and restrict admin access as needed

## Support

For issues or questions, check:
- Render Documentation: https://render.com/docs
- Railway Documentation: https://docs.railway.app

---

**Note**: Replace placeholder content (map embed, contact details, eBook PDF) before deploying to production.
=======
# Shree Vishva Ayurved Clinic — GuruParampara

A modern Ayurvedic clinic website with eBook access flow and admin dashboard for managing user submissions.

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd "Guru Parampara"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   PORT=3000
   SESSION_SECRET=your-super-secret-session-key
   ADMIN_USER=admin
   ADMIN_PASS=your-secure-password
   ```

4. Start the server:
   ```bash
   npm run start
   ```

5. Open `http://localhost:3000` in your browser

### Development Mode (with auto-reload)
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory with:

- `PORT` - Server port (default: 3000)
- `SESSION_SECRET` - Secret key for session encryption (required in production)
- `ADMIN_USER` - Admin login username (default: admin)
- `ADMIN_PASS` - Admin login password (change this!)

**Important:** Never commit your `.env` file to git. Use `.env.example` as a template.

## Project Structure

```
├── app.js              # Main Express application
├── package.json        # Dependencies and scripts
├── views/              # EJS templates
│   ├── index.ejs       # Homepage
│   ├── ebook-access.ejs
│   ├── ebook.ejs
│   ├── admin-*.ejs
│   └── partials/       # Header and footer
├── public/             # Static assets
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── ebook.pdf       # eBook file (add your PDF here)
├── data/               # User data storage (git-ignored)
│   ├── users.json      # JSON database
│   └── users.csv       # CSV export
└── images/             # Image assets
```

## Features

- **Homepage**: Modern, responsive design showcasing clinic services
- **eBook Access**: Form-based access control with user data collection
- **Admin Dashboard**: View and download user submissions
- **Data Storage**: File-based storage (JSON + CSV) suitable for low-medium traffic

## Admin Access

1. Login: `http://localhost:3000/admin/login`
2. Dashboard: `http://localhost:3000/admin`
3. Download CSV: `http://localhost:3000/admin/download-csv`

## Deployment to Render

### Step 1: Push to GitHub

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `guru-parampara-clinic` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave empty (or `.` if needed)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

5. **Set Environment Variables** (in Render dashboard):
   - `PORT` - Leave empty (Render sets this automatically)
   - `SESSION_SECRET` - Generate a random secret: `openssl rand -base64 32`
   - `ADMIN_USER` - Your admin username
   - `ADMIN_PASS` - Your secure admin password

6. **Advanced Settings**:
   - Enable "Auto-Deploy" for automatic deployments on git push
   - Plan: Free tier is sufficient for low traffic

7. Click "Create Web Service"

### Step 3: Data Persistence

Render's free tier includes persistent disk storage. The `data/` folder will automatically persist across deployments and restarts.

**Important Notes:**
- User data files (`data/users.json`, `data/users.csv`) are git-ignored
- Data persists on Render's persistent disk
- The `data/` folder is created automatically on first run
- Back up your data regularly using the admin CSV export feature

### Step 4: Custom Domain (Optional)

1. In Render dashboard → Settings → Custom Domains
2. Add your domain
3. Follow DNS configuration instructions

## Alternative: Railway Deployment

Railway also offers free tier with persistent storage:

1. Go to [Railway](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set environment variables
5. Railway auto-detects Node.js and deploys

## Troubleshooting

### Data not persisting?
- Ensure `data/` folder exists in your project
- Check Render/Railway logs for file system errors
- Verify environment variables are set correctly

### Admin login not working?
- Check `ADMIN_USER` and `ADMIN_PASS` environment variables
- Clear browser cookies and try again

### Port issues?
- Render/Railway sets `PORT` automatically - don't hardcode it
- Use `process.env.PORT || 3000` in your code (already done)

## Data Backup

**Recommended backup strategy:**
1. Regularly export data via admin dashboard (`/admin/download-csv`)
2. Store backups in a secure location
3. Consider automated backups for production

## Security Notes

- Change default admin credentials in production
- Use strong `SESSION_SECRET` (32+ characters)
- Enable HTTPS (automatic on Render/Railway)
- Review and restrict admin access as needed

## Support

For issues or questions, check:
- Render Documentation: https://render.com/docs
- Railway Documentation: https://docs.railway.app

---

**Note**: Replace placeholder content (map embed, contact details, eBook PDF) before deploying to production.
>>>>>>> 0a3a1db6e046d8b0e488c57522dd7cade99a3cb6
>>>>>>> 2176e5a (Initial commit: MongoDB Atlas migration)
