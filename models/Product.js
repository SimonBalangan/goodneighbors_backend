const mongoose = require("mongoose");

const { Schema } = mongoose;

const Product = new Schema({
  category: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  term: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  brand: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },

});

module.exports = mongoose.model("Product", Product);
