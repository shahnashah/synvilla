import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ["LA", "BD", "GA"], required: true },
  isNewArrival: { type: Boolean, default: false },
  image: { type: String, required: true, default: "" },
});

const products = mongoose.model("Product", productSchema);
export default products;
