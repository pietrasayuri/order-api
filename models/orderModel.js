import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    productId: Number,
    quantity: Number,
    price: Number
});

const orderSchema = new mongoose.Schema({
    orderId: String,
    value: Number,
    creationDate: Date,
    items: [itemSchema]
});

export default mongoose.model("Order", orderSchema);