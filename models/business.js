const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
	title:String,
	image: String,
	location: String,
	description: String,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Review'
		}
	]
});

BusinessSchema.post('findOneAndDelete', async function (doc) {
	if (doc) {
		await Review.deleteMany({
			_id: {
				$in: doc.reviews
			}
		})
	}
})

module.exports = mongoose.model('Business', BusinessSchema);