const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: { type: String, required: true, maxLength: 256 },
	author: String,
	pages: Number,
	price: Number 
});

module.exports = mongoose.model('Book', bookSchema);