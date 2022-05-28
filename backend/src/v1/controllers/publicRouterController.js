const Product = require("../Models/product");
const { sendResponse } = require("./utility");

exports.getProducts = async (req, res, next) => {
	try {
		const products = await Product.find({}).exec();
		sendResponse(res, 200, "success", {
			products,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.getProduct = async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.productId);
		sendResponse(res, 200, "success", {
			product,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};
