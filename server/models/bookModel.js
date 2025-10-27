const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
  title: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
