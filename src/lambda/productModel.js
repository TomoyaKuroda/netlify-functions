// productModel.js
import mongoose from 'mongoose'

// Load the server
import db from './server'
// Set Product Schema
const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, "Name field is required"],
      max: 100,
    },
    price: {
      type: Number,
      required: [true, "Price field is required"],
    },
  }),
  Product = mongoose.model("product", schema);
export default Product;
