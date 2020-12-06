const User = require('../models/user');
const Review = require('../models/review.js')
const Business = require('../models/business.js')
module.exports.renderRegister = (req, res) => {
	res.render('users/register');
}

module.exports.register = async (req, res) => {
	try{
	const {email, username, password, userIcon } = req.body;
	const user = new User({ email, username, userIcon});
	const registeredUser = await User.register(user, password);
	req.login(registeredUser, err =>{
		if(err) return next(err);
		req.flash('success', 'Welcome to Plague Score!');
		res.redirect('/businesses');
	})
	}catch (e) {
		req.flash('error', e.message);
		res.redirect('register');
	}
}

module.exports.renderLogin = (req, res) => {
	res.render('users/login');
}

module.exports.login = (req, res) => {
	req.flash('success', 'welcome back!');
	const redirectUrl = req.session.returnTo || '/businesses';
	delete req.session.returnTo;
	res.redirect(redirectUrl);
}

module.exports.renderProfile = async (req, res) => {
	const currentUser = req.user;
	if (currentUser === undefined) {
		req.flash('error', 'Not logged in!');
		res.redirect('/login');
	} else {
		try {
			const userReviews = await Review.find({author: currentUser._id});
			// console.log(userReviews);
			res.render('users/profile', {currentUser, userReviews});
		  } catch(err) {
			// console.log("Error: " + err.message);
			const userReviews = [];
			req.flash('error', err.message);
			res.render('users/profile', {currentUser, userReviews});
		  }
	}
}
module.exports.newIcon = (req, res) => {
	const icons = req.app.get('userIcons');
	res.json({icon: icons[Math.floor(Math.random() * icons.length)]})
}

module.exports.updateProfile = async (req,res) => {
	const currentUser = req.user;
	const updatedUser = { 
		...currentUser._doc, // start with the old object
		...req.body, // overwrite old object with any changes
		username: currentUser._doc.username, 
		_id: currentUser._doc._id
	};
	const business = await User.findByIdAndUpdate(currentUser._id, updatedUser);
	if (business !== undefined) {
		res.json(updatedUser);
	} else {
		res.json(currentUser);
		res.flash('error', "could not update user");
	}
}


module.exports.logout = (req, res) =>{
	req.logout();
	req.flash('success', "Logout Successful");
	res.redirect('/businesses');
}