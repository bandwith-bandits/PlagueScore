const express = require('express');
const router = express.Router({mergeParams: true});
const Business = require('../models/business')
const Review = require('../models/review');
const reviews = require('../controllers/reviews')
const {isLoggedIn, isReviewAuthor, reviewAuthorIsNotBusinessAuthor } = require('../middleware');
const catchAsync =require('../utils/catchAsync');


router.post('/', isLoggedIn, reviewAuthorIsNotBusinessAuthor, catchAsync(reviews.createReview) );

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.destroyReview));

module.exports = router;