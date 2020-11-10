const Business = require('./models/business');
const Review = require('./models/review');

module.exports.isLoggedIn = (req, res, next) => {
	
	if (!req.isAuthenticated()) {
		req.session.returnTo = req.originalUrl
		req.flash('error', 'you must be signed in');
		return res.redirect('/login');
	}
	next();
}

module.exports.isAuthor = async (req, res, next) => {
	const {id} = req.params;
	const business = await Business.findById(id);
	if(!business.author.equals(req.user._id)){
		req.flash('error', 'You do not have permission to do that!');
		return res.redirect(`/businesses/${id}`);
	}
	next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
	const { id, reviewId } = req.params;
	const review = await Review.findById(reviewId);
	if(!review.author.equals(req.user._id)){
		req.flash('error', 'You do not have permission to do that!');
		return res.redirect(`/businesses/${id}`);
	}
	next();
}