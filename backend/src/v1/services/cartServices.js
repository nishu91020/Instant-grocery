const mongoose = require("mongoose");
const Customer = require("../Models/customer");
const Product = require("../Models/product");

exports.addProductToCart = async (customerId, productId) => {
	const user = await Customer.findById(customerId);
	if (!user) {
		throw new Error("Customer not found!");
	}
	const product = await Product.findById(productId);
	await user.cart.push({
		product: product,
		quantity: 1,
	});
	await user.save();
	return user.cart;
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
	return user.cart;
};

exports.getCart = async (customer) => {
	await customer.populate("cart.product");
	return customer.cart;
};

const details = [
	{
		product: "productId",
		quantity: 10,
	},
];

exports.updateCart = async (updatedCartDetails, customer) => {
	const UPDATES = ["product", "quantity"];
	const details = {};

	updatedCartDetails.forEach((update) => {
		const newUpdate = {};
		Object.keys(update).forEach((key) => {
			if (UPDATES.includes(key)) {
				newUpdate[key] = update[key];
			} else {
				throw new Error(`invalid ${key} update in cart`);
			}
		});

		details[newUpdate.product] = newUpdate;
	});

	// console.log(details);

	customer.cart = customer.cart.map((item) => {
		const key = item.product.toString();
		if (details[key]) {
			item = details[key];
		}
		console.log(item);
		return item;
	});

	await customer.save();

	await customer.populate("cart");
	return customer.cart;
};
