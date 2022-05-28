const mongoose = require("mongoose");
const Order = requier("../Models/orders");
const Customer = require("../Models/customer");

const addOrder = async (order, customerId) => {
	const customer = await Customer.findById(customerId).exec();
	if (!customer) {
		throw new Error("Customer does not exist !!");
	}
	const new_order = new Order(order);
	await new_order.save();
	return new_order;
};

const deleteOrder = async (orderId, customerId) => {
	const customer = await Customer.findById(customerId);
	if (!customer) {
		throw new Error("Customer Invalid");
	}
	const isPresent = customer.orders.includes(orderId);
	if (isPresent) {
		const order = await Order.findByIdAndDelete(orderId);
		if (!order) {
			throw new Error("Invalid Order!");
		}
		customer.orders = customer.orders.filter((id) => id !== orderId);
		await customer.save();
		return order;
	} else {
		throw new Error("Invalid Order!");
	}
};
UpdateOrder = async (orderId, CustomerId) => {};

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param {mongoose.Document} customer instance of Customer
 * @returns {[mongoose.Document]} list of all the orders of customer
 */

exports.getOrders = async (customer) => {
	await customer.populate("orders").exec();
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

	await customer.populate("cart").exec();
	const cart = customer.cart;
	const totalCost = cart.reduce((sum, cur) => {
		return sum + cur.price;
	}, 0);

	validOrderDetails.totalCost = totalCost;
	validOrderDetails.status = "Confirmed";
	validOrderDetails.products = cart.products;
	validOrderDetails.user = customer._id;

	const order = new Order(validOrderDetails);

	await order.save();

	customer.orders.push(order);
	await customer.save();

	return order;
};
