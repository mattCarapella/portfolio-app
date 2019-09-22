const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxLength) => ({ type: String, required: true, maxLength: maxLength })

const portfolioSchema = new Schema({
	userId: setStringType(256),
	title: setStringType(256), 
	url: setStringType(256),
	github_link: setStringType(256),
	languages: { type: String, required: false, maxLength: 2048 },
	company: setStringType(256),
	location: setStringType(128),
	position: setStringType(256), 
	description: setStringType(2048),
	startDate: { type: Date, required: true },
	endDate: Date
});

module.exports = mongoose.model('Portfolio', portfolioSchema);