const Business = require('../models/business')
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
	const business = await Business.findById(req.params.id);
	const review = new Review(req.body.review);
	review.author = req.user._id;
	business.reviews.push(review);
	await review.save();
	await business.save();
	req.flash('success', 'Created new review!')
	res.redirect(`/businesses/${business._id}`);
}

module.exports.destroyReview = async(req, res) => {
	const { id, reviewId } = req.params;
	await Business.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
	await Review.findByIdAndDelete(reviewId);
	req.flash('success', 'Succesfully deleted review')
	res.redirect(`/businesses/${id}`);
}