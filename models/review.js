const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	title: String,
	body: String,
	rating1: Number,
	rating2: Number,
	rating3: Number,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Review', ReviewSchema);