const Vendor = require("../Models/vendor");
const {
	addProduct,
	deleteProduct,
	updateProduct,
	saveProductImages,
	getProductImages,
} = require("../services/productServices");
const { sendResponse } = require("./utility");

// add products with modifiable fields

exports.addProductToInventory = async (req, res, next) => {
	try {
		const new_product = await addProduct(req.client._id, req.body);
		sendResponse(res, 200, "success", new_product);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
exports.deleteProductFromInventory = async (req, res, next) => {
	try {
		const product = await deleteProduct(req.params.productId, req.client);
		sendResponse(res, 200, "success", {
			product,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};

exports.uploadImages = async (req, res, next) => {
	try {
		const urls = await saveProductImages(req.product, req.files);
		sendResponse(res, 200, "success", {
			vendorId: req.client._id,
			productId: req.product._id,
			imageUrls: urls,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.getImages = async (req, res, next) => {
	try {
		const urls = getProductImages(req.product);
		sendResponse(res, 200, "success", {
			vendorId: req.client._id,
			productId: req.product._id,
			imageUrls: urls,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

//update products with modifiable fields

exports.updateProductInInventory = async (req, res, next) => {
	try {
		const modifiedProduct = await updateProduct(req.params.productId, req.body, req.client);
		sendResponse(res, 200, "success", modifiedProduct);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
exports.getAllProducts = async (req, res, next) => {
	try {
		const products = await Vendor.findById(req.client._id).populate("products");
		sendResponse(res, 200, "success", products);
	} catch (e) {
		sendResponse(res, 404, "failed", e.message);
	}
};

exports.getProduct = async (req, res, next) => {
	try {
		const vendor = req.client;
		const product = await getProductById(req.params.productId, vendor);
		sendResponse(res, 200, "success", {
			vendorId: vendor._id,
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
