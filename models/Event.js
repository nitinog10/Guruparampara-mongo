const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	date: {
		type: String,
		required: true,
		trim: true
	},
	venue: {
		type: String,
		required: true,
		trim: true
	},
	speaker: {
		type: String,
		default: '',
		trim: true
	}
}, {
	timestamps: true
});

// Index for faster queries
eventSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Event', eventSchema);

