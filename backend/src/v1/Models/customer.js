const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const CustomerSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
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
});

//login middleware

CustomerSchema.static.findCustomerByCredential = async (email, password) => {
	const customer = Customer.findOne({ email });
	if (!customer) {
		throw new Error("Unable to login");
	}
	const isMatch = bcrypt.compare(password, customer.password);
	if (!isMatch) {
		throw new Error("Unable to login");
	}
	return customer;
};

//hash password before storing
CustomerSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		user.password = await generateHash(user.password, "myfirstapi");
	}
	next();
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
