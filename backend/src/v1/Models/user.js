const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: {
		salt: { type: String, required: true },
		hash: { type: String, required: true },
	},

	addresses: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Address", required: true }],
	orders: [
		{
			type: mongoose.SchemaTypes.ObjectId,
			ref: "Order",
			required: true,
		},
	],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
