const mongoose = require("mongoose");
const Customer = require("../Models/customer");
const Product = require("../Models/product");

exports.addProductToCart = async (customerId, productId) => {
	const user = await Customer.findById(customerId);
	if (!user) {
		throw new Error("Customer not found!");
	}
	const product = await Product.findById(productId);
	await user.cart.push(product);
	await user.save();
	return user;
};

// remove from cart not working properly
exports.removeProductFromCart = async (customerId, productId) => {
	const user = await Customer.findById(customerId);
	if (!user) {
		throw new Error("customer not found!");
	}
	const product = await Product.findById(productId).exec();
	if (!product) {
		throw new Error("product not found");
	}
	if (!user.cart.includes(product._id)) {
		throw new Error("product not found in cart!");
	}
	const modified_cart = await user.cart.filter((pr) => pr !== product._id);
	user.cart = modified_cart;
	await user.save();
	return user;
};

exports.getCart = async (customer) => {
	await customer.populate("cart");
	return customer.cart;
};
