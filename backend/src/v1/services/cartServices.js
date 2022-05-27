const mongoose = require("mongoose");
const Customer = require("../Models/customer");
const Product = require("../Models/product");

exports.addProductToCart = async (customerId, productId) => {
	const user = await Customer.findById(customerId);
	if (!user) {
		throw new Error("Customer not found!");
	}
	const product = await Product.findById(productId);
	user.cart.push(product);
	await user.save();
	return user;
};
exports.removeProductFromCart = async (customerId, productId) => {
	const user = await Customer.findById(customerId);
	if (!user) {
		throw new Error("customer not found!");
	}
	const product = await Product.findById(productId).exec();
	if (!product) {
		throw new Error("product not found");
	}
	if (!user.cart.products.includes(product._id)) {
		throw new Error("product not found in cart!");
	}
	const prod = await user.cart.products.filter((pr) => pr !== product._id);
	user.cart.products = prod;
	await user.save();
	return user;
};
