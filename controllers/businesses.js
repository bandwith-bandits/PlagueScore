const Business = require('../models/business');
const axios = require('axios');
const mongoose = require('mongoose');

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
	var business = undefined;
	business = await Business.findOne({_id: req.params.id}).populate({
		path: 'reviews',
		populate: {
			path: 'author'
		}
	}).populate('author');
	
	if(!business){
		const data = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.params.id}&key=AIzaSyDmzfvm2aV1kezXVPpmPZRWp-qpoeUHkpg`);
		if(data.data.status === "INVALID_REQUEST"){
			
			req.flash('error', 'Business not found');
			return res.redirect('/businesses');
		}	
 business = new Business({_id: req.params.id,title: data.data.result.name, photoReference: (data.data.result.photos ? data.data.result.photos : [{photo_reference: undefined}])[0].photo_reference, author: mongoose.Types.ObjectId("5fb2bc11000e67331457dab8")});
	await business.save();
		 	req.flash('success', 'Succesfully made a new business')
			res.redirect(`/businesses/${business._id}`)
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
	const title = req.query.title;
	const data =  await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${title}&key=AIzaSyDmzfvm2aV1kezXVPpmPZRWp-qpoeUHkpg`);
	let viewport = data;
	var businesses = data.data.results.map((result) => {
     return {
		_id: result.place_id,
        title: result.name,
		location: result.formatted_address,
		photoReference: (result.photos ? result.photos : [{photo_reference: undefined}])[0].photo_reference,
		geometry: result.geometry
	};

})
	
	if(!businesses[0]){
		return res.redirect('/businesses');
	}	
	res.render('businesses/search', {businesses, viewport})
  };
