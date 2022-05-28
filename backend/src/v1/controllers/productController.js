const Product = require('../Models/product');
const Vendor = require('../Models/vendor');
const { addProduct, deleteProduct, updateProduct } = require('../services/productServices');
const { sendResponse } = require('./utility');

// add products with modifiable fields

exports.addProductToInventory = async (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        vendor: req.client,
        price: req.body.price,
        quantity: req.body.quantity,
        reviews: req.body.reviews,
        rating: req.body.rating,
        status: req.body.status
    });
    try {
        const new_product = await addProduct(product, req.client._id);
        sendResponse(res, 200, 'success', new_product);
    } catch (err) {
        sendResponse(res, 400, 'failed', err.message);
    }
};
exports.deleteProductFromInventory = async (req, res, next) => {
    try {
        const product = await deleteProduct(req.params.id, req.client);
        sendResponse(res, 200, 'success', `product ${product} deleted`);
    } catch (err) {
        sendResponse(res, 400, 'failed', err.message);
    }
};

//update products with modifiable fields

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
        _id: req.params.id
    });
    try {
        const modifiedProduct = await updateProduct(req.params.id, product, req.client);
        sendResponse(res, 200, 'success', modifiedProduct);
    } catch (err) {
        sendResponse(res, 400, 'failed', err.message);
    }
};
exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Vendor.findById(req.client._id).populate('products');
        sendResponse(res, 200, 'success', products);
    } catch (e) {
        sendResponse(res, 404, 'failed', e.message);
    }
};
