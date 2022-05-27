const { addProductToCart, removeProductFromCart } = require('../services/cartServices');
const { sendResponse } = require('./utility');

exports.addToCart = async (req, res) => {
    try {
        const customer = await addProductToCart(req.customerId, req.productId);
        sendResponse(res, 200, 'success', customer);
    } catch (e) {
        sendResponse(res, 400, 'failed', e.message);
    }
};
exports.removeFromCart = async (req, res) => {
    try {
        const customer = await removeProductFromCart(req.customerId, req.productId);
        sendResponse(res, 200, 'success', customer);
    } catch (e) {
        sendResponse(res, 400, 'failed', e.message);
    }
};
