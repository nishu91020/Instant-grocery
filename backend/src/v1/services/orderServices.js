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
