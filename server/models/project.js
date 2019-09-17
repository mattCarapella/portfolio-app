const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxLength) => ({ type: String, required: true, maxLength: maxLength })

const projectSchema = new Schema({
	userId: setStringType(256),
	title: setStringType(256), 
	languages: setStringType(2048),
	description: setStringType(4096)
});

module.exports = mongoose.model('Project', projectSchema);