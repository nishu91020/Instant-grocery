const { sendResponse } = require("./utility");

exports.getAllOrders = async (req, res, next) => {
	try {
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
