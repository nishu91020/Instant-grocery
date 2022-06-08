const Product = require("../Models/product");
const Vendor = require("../Models/vendor");
const multer = require("multer");
const upload = multer({ storage: "" });

exports.addProduct = async (vendorId, productDetails) => {
	const product = new Product({
		name: productDetails.name,
		img: productDetails.img,
		description: productDetails.description,
		vendor: vendorId,
		price: productDetails.price,
		quantity: productDetails.quantity,
		reviews: productDetails.reviews,
		rating: productDetails.rating,
		status: productDetails.status,
	});
	const vendor = await Vendor.findById(vendorId);
	if (!vendor) {
		throw new Error("vendor not found!");
	}
	await product.save();
	vendor.products.push(product);
	vendor.save();
	return product;
};
exports.deleteProduct = async (productId, vendor) => {
	if (!vendor.products.includes(productId)) {
		throw new Error("you are authenticated to delete this prpduct");
	}
	const product = await Product.findByIdAndDelete(productId);
	if (!product) {
		throw new Error("product not found");
	}
	vendor.products = vendor.products.filter((prod) => prod !== productId);
	vendor.save();
	return product;
};
exports.updateProduct = async (productId, productDetails, vendor) => {
	if (!vendor.products.includes(productId)) {
		throw new Error("you are not authenticated to update this product");
	}
	const product = await Product.findById(productId);
	if (!product) {
		throw new Error("product not found");
	}
	const MODIFIABLE = ["price", "image", "description", "quantity", "status"];
	const keys = Object.keys(productDetails);
	keys.forEach((key) => {
		if (MODIFIABLE.includes(key)) {
			product[key] = productDetails[key];
		} else {
			throw new Error(`invalid property ${key} of product in request`);
		}
	});
	await product.save();
	return product;
};

exports.getProductById = async (productId, vendor) => {
	const product = await Product.findById(productId);
	if (!product) {
		throw new Error("Product not found");
	}

	if (!vendor.products.includes(product._id)) {
		throw new Error("Product not found");
	}

	return product;
};

exports.saveProductImages = async (product, files) => {
	const urls = files.map((file) => {
		return {
			url: file.location,
			contentType: file.mimetype,
		};
	});

	product.images = urls;
	await product.save();

	return urls;
};

exports.getProductImages = (product) => {
	return product.images;
};
