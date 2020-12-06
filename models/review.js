const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	title: String,
	body: String,
	ratingCleanliness: Number,
	ratingMasks: Number,
	ratingDistancing: Number,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Review', ReviewSchema);