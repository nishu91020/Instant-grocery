const Product = require("../Models/product");

exports.checkIfProductExists = async (req, res, next) => {
	const productId = req.params.productId;
	const vendor = req.client;

	const product = await Product.findById(productId).exec();
	if (!product) {
		next(new Error("product not found"));
	}

	if (!vendor.products.includes(productId)) {
		next(new Error("product not found"));
	}

	req.product = product;
	next();
};
