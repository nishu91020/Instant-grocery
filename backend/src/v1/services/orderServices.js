const mongoose = require("mongoose");
const { Address } = require("../Models/address");
const Order = require("../Models/orders");
const Customer = require("../Models/customer");

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param {mongoose.Document} customer instance of Customer
 * @returns {[mongoose.Document]} list of all the orders of customer
 */

exports.getOrders = async (customer) => {
	await customer.populate("orders");
	return customer.orders;
};

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param {mongoose.Types.ObjectId} oid
 * @param {mongoose.Document} customer
 */

exports.getOneOrder = async (oid, customer) => {
	if (customer.orders.includes(oid)) {
		const order = await Order.findById(oid).exec();
		if (!order) {
			throw new Error("failed to fetch the order");
		}

		return order;
	} else {
		throw new Error("failed to fetch the order");
	}
};

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param {Object} orderDetails details of order
 * @param {mongoose.Document} customer instance of Customer
 *
 */

exports.addOrder = async (orderDetails, customer) => {
	const ALLOWED = ["address", "modeOfPayment"];
	const validOrderDetails = {};

	Object.keys(orderDetails).forEach((key) => {
		if (ALLOWED.includes(key)) {
			validOrderDetails[key] = orderDetails[key];
		} else {
			throw new Error(`${key} invalid property in request`);
		}
	});

	// check whether address exists or not
	const address = await Address.findById(validOrderDetails.address.id);
	if (!address || !customer.address.includes(address._id)) {
		throw new Error("Invalid address");
	}

	validOrderDetails["address"] = address;
	await customer.populate("cart");
	await customer.populate("cart.product");
	const cart = customer.cart;
	// calculate total cost of each product
	const totalCost = cart.reduce((sum, cur) => {
		console.log(cur);
		return sum + cur.product.price * cur.quantity;
	}, 0);

	if (totalCost == 0) {
		throw new Error("cart is empty");
	}

	validOrderDetails.totalCost = totalCost;
	validOrderDetails.status = "Confirmed";
	validOrderDetails.products = cart;
	validOrderDetails.user = customer._id;

	const order = new Order(validOrderDetails);

	await order.save();

	customer.orders.push(order);
	customer.cart = [];
	await customer.save();

	return order;
};
