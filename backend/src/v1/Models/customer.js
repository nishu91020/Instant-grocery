const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { validateHash, generateSalt, generateHash } = require("../utilities/crypto");

const jwt = require("jsonwebtoken");

const CustomerSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },

	address: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Address" }],
	orders: [
		{
			type: mongoose.SchemaTypes.ObjectId,
			ref: "Order",
			required: true,
		},
	],

	cart: new Schema({
		products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
	}),
	tokens: [
		{
			deleteAt: { type: Date, required: true },
			token: { type: String, required: true },
		},
	],
});

CustomerSchema.virtual("displayProfile").get(function () {
	const customer = this;
	return {
		firstName: customer.firstName,
		lastName: customer.lastName,
		email: customer.email,
	};
});

//creating token

CustomerSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("tokens")) {
		user.tokens = user.tokens.filter((token) => !(token.deleteAt < Date.now()));
	}

	next();
});

//hash password before storing
CustomerSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		const salt = generateSalt(16);
		user.password = generateHash(user.password, salt);
		user.password = user.password.concat("." + salt);
	}
	next();
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
