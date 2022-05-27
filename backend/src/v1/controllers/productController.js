const Product = require("../Models/product");
const { addProduct, deleteProduct, updateProduct } = require("../services/productServices");
const { sendResponse } = require("./utility");

exports.addProductToInventory = async (req, res, next) => {
	const product = new Product({
		name: req.body.name,
		img: req.body.img,
		description: req.body.description,
		vendor: req.body.vendor,
		price: req.body.price,
		quantity: req.body.quantity,
		reviews: req.body.reviews,
		rating: req.body.rating,
		status: req.body.status,
	});
	try {
		const new_product = await addProduct(product, req.vendorId);
		sendResponse(res, 200, "success", new_product);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
exports.deleteProductFromInventory = async (req, res, next) => {
	try {
		const product = await deleteProduct(req.id);
		sendResponse(res, 200, "success", `product ${product} deleted`);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
exports.updateProductInInventory = async (req, res, next) => {
	const product = new Product({
		name: req.body.name,
		img: req.body.img,
		description: req.body.description,
		vendor: req.body.vendor,
		price: req.body.price,
		quantity: req.body.quantity,
		reviews: req.body.reviews,
		rating: req.body.rating,
		status: req.body.status,
		_id: req.params.id,
	});
	try {
		const modifiedProduct = await updateProduct(req.params.id, product);
		sendResponse(res, 200, "success", modifiedProduct);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
