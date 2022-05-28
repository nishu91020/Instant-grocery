const { addProductToCart, removeProductFromCart, getCart } = require("../services/cartServices");
const { sendResponse } = require("./utility");

exports.getCustomerCart = async (req, res, next) => {
	try {
		const customer = req.client;
		const cart = await getCart(customer);
		sendResponse(res, 200, "success", {
			cart,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.addToCart = async (req, res) => {
	try {
		const customer = await addProductToCart(req.client._id, req.params.productId);
		sendResponse(res, 200, "success", customer);
	} catch (e) {
		sendResponse(res, 400, "failed", e.message);
	}
};
exports.removeFromCart = async (req, res) => {
	try {
		const customer = await removeProductFromCart(req.client._id, req.params.productId);
		sendResponse(res, 200, "success", customer);
	} catch (e) {
		sendResponse(res, 400, "failed", e.message);
	}
};
