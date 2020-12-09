const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
	userIcon: {
		type: String,
		required: true,
		unique: false
	},
	email: {
		type: String,
		required: true,
		unique: true
	},

	resetPasswordToken: {
		type: String,
		required: false,

	},

	resetPasswordExp: {
		type: Date,
		required: false,

	}



});



UserSchema.methods.generatePasswordReset = function() {
	this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
	this.resetPasswordToken = Date.now();
}


UserSchema.plugin(passportLocalMongoose); //this plugin adds username, password, and makes sure usernames are unique

module.exports = mongoose.model('User', UserSchema);