const express = require('express');
const router = express.Router();
const businesses = require('../controllers/businesses');
const Business = require('../models/business');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAuthor} = require('../middleware');

router.route('/')
	.get(catchAsync(businesses.index) )
	.post(isLoggedIn, catchAsync(businesses.createBusiness) )



router.get('/new', isLoggedIn, businesses.renderNewForm)

router.route('/:id')
	.get( catchAsync(businesses.showBusiness) )
	.put(isLoggedIn, isAuthor, catchAsync(businesses.updateBusiness))
	.delete(isLoggedIn, isAuthor, catchAsync(businesses.destroyBusiness))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(businesses.renderEditForm));




module.exports = router;