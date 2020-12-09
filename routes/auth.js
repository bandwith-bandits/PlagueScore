const express = require('express');
const {check} = require('express-validator');

const Password = require('../controllers/password');

router.post('/recover', Password.recover);

router.get('/reset/:token', Password.reset);

router.post('/reset/:token', [
    check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
], Password.resetPassword);

module.exports = router;