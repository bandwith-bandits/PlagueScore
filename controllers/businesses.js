const Business = require('../models/business');

module.exports.index = async (req, res) => {
	const businesses = await Business.find({});
	res.render('businesses/index', {businesses})
}

module.exports.renderNewForm = (req, res) => {
	res.render('businesses/new');
}

module.exports.createBusiness = async(req, res) => {
	const business = new Business(req.body.business);
	business.author = req.user._id;
	await business.save();
	req.flash('success', 'Succesfully made a new business')
	res.redirect(`/businesses/${business._id}`)
}

module.exports.showBusiness = async(req,res,) => {
	const business = await Business.findById(req.params.id).populate({
		path: 'reviews',
		populate: {
			path: 'author'
		}
	}).populate('author');
	if(!business){
		req.flash('error', 'Business not found');
		return res.redirect('/businesses');
	}
	res.render('businesses/show', {business});
}

module.exports.renderEditForm = async(req,res,) => {
	const business = await Business.findById(req.params.id)
	if(!business){
		req.flash('error', 'Business not found!');
		return res.redirect('/businesses');
	}		
	res.render('businesses/edit', {business});
}

module.exports.updateBusiness = async (req,res) => {
	const { id } = req.params;
	const business = await Business.findByIdAndUpdate(id, { ...req.body.business });
	req.flash('success', 'Succesfully updated business')
	res.redirect(`/businesses/${business._id}`)
}

module.exports.destroyBusiness = async (req, res) => {
	const { id } = req.params;
	await Business.findByIdAndDelete(id);
	req.flash('success', 'Succesfully deleted business')
	res.redirect(`/businesses`);
}

module.exports.getByName = async (req, res) => {
	//const title = req.params.title;
	//const business = await Business.find({title: {$regex: title, $options: "i"}});
	const business = false;
	if(!business){
		const businesses = await Business.find({});
		return res.render('businesses/index', {businesses});
	}	
	res.render('businesses/search', {business})
  };