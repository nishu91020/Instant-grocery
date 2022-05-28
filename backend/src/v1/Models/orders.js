const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	createdAt: { type: mongoose.SchemaTypes.Date, required: true, default: Date.now() },
	user: { type: mongoose.SchemaTypes.ObjectId, ref: "Customer", required: true },
	products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product", required: true }],
	totalCost: { type: Number, required: true },
	address: { type: mongoose.SchemaTypes.ObjectId, ref: "Address", required: true },
	status: {
		type: String,
		enum: ["Packed", "Shipped", "Delivered", "Dispatched", "Confirmed", "Failed"],
		required: true,
	},
	modeOfPayment: { type: String, enum: ["Online", "COD", "card"] },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
