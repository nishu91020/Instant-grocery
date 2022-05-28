const Vendor = require("../Models/vendor");
const { addProduct, deleteProduct, updateProduct } = require("../services/productServices");
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
		const product = await deleteProduct(req.params.id, req.client);
		sendResponse(res, 200, "success", {
			product,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};

//update products with modifiable fields

exports.updateProductInInventory = async (req, res, next) => {
	try {
		const modifiedProduct = await updateProduct(req.params.id, req.body, req.client);
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
