const User = require('../models/user');
const emailValidator = require('../emailValidator');

module.exports.renderRegister = (req, res) => {
	res.render('users/register');
}

module.exports.register = async (req, res) => {
	try{
	const {email, username, password } = req.body;
	emailValidator.validate(email);
	const user = new User({ email, username});
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

module.exports.renderProfile = (req, res) => {
	
	res.render('users/profile')
}

module.exports.logout = (req, res) =>{
	req.logout();
	req.flash('success', "Logout Successful");
	res.redirect('/businesses');
}