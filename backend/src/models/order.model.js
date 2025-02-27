import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true, required: true },
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  items: [
    {
      itemName: String,
      quantity: Number,
      rate: Number,
    },
  ],
  amount: { type: Number, required: true },
});

const orders = mongoose.model("Order", orderSchema);
export default orders;