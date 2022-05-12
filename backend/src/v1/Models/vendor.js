const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VendorSchema = Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: {
		salt: { type: String, required: true },
		hash: { type: String, required: true },
	},
	orders: [
		{
			type: mongoose.SchemaTypes.ObjectId,
			ref: "Order",
		},
	],
	address: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Address",
		required: true,
	},
	products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
});

const Vendor = mongoose.model("Vendor", VendorSchema);

module.exports = Vendor;
