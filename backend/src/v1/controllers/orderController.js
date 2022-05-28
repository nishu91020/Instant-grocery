const { addOrder, getOrders, getOneOrder } = require("../services/orderServices");
const { sendResponse } = require("./utility");

exports.getAllOrders = async (req, res, next) => {
	try {
		const customer = req.client;
		const orders = await getOrders(customer);
		sendResponse(res, 200, "success", {
			orders,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.getOrder = async (req, res, next) => {
	try {
		const customer = req.client;
		const order = await getOneOrder(req.params.oid, customer);
		sendResponse(res, 200, "success", {
			order,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.createOrder = async (req, res, next) => {
	try {
		const customer = req.client;
		const order = await addOrder(req.body, customer);
		sendResponse(res, 200, "success", {
			order,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.updateOrderStatus = async (req, res, next) => {
	try {
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};
