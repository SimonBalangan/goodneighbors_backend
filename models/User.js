const mongoose = require("mongoose");

//1. Schema-Blueprint aus Library destrukturieren
const { Schema } = mongoose;

//2. Neue Schema-Instanz erstellen
const User = new Schema({
  first_name: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  last_name: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  city: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  zip_code: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  age: {
    type: Number,
    required: true,
  },
  borrowedProducts: [
    {
    type: Schema.Types.ObjectId, 
    ref: "User", 
    default: []
  }
],
  email: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
});

//3. Schema als Model exportieren ('Collectionname', Schema)
module.exports = mongoose.model("User", User);
