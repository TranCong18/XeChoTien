// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  image: { type: String },
  desc: { type: String },
  seats: { type: String },
  transmission: { type: String },
  fuel: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
