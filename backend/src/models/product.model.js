// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     description: { type: String, required: true },
//     category: { type: String, required: true },
//     stock: { type: Number, required: true, default: 0 }
// }, { timestamps: true });

// export default mongoose.model('Product', productSchema);


//neeche wale me run ho raha tha

// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     description: { type: String, required: true },
//     category: { type: String, required: true },
//     stock: { type: Number, required: true, default: 0 },
//     image: { type: String, required: true }, // Image URL for frontend display
// }, { timestamps: true });

// export default mongoose.model('Product', productSchema);



// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true },
// });

// export default mongoose.model("Product", productSchema);

import mongoose from "mongoose";
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export default productSchema;