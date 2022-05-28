const { addReview, deleteReview, getAllReviews, getReview } = require('../services/reviewServices');

const { sendResponse } = require('./utility');

exports.AddReviewToProduct = async (req, res, next) => {
    try {
        const product = await addReview(req.params.productId, req.body, req.client);
        sendResponse(res, 200, 'success', product);
    } catch (err) {
        console.log(err);
        sendResponse(res, 400, 'failed', err.message);
    }
};
exports.deleteReviewFromProduct = async (req, res, next) => {
    try {
        const review = await deleteReview(req.params.reviewId, req.params.productId);
        sendResponse(res, 200, 'successfully deleted', review);
    } catch (err) {
        sendResponse(res, 400, 'failed', err.message);
    }
};
exports.getAllReviewsOfProduct = async (req, res, next) => {
    try {
        const reviews = await getAllReviews(req.params.productId);
        sendResponse(res, 200, 'success', reviews);
    } catch (err) {
        sendResponse(res, 200, 'failed', err.message);
    }
};
exports.getOneReviewOfProduct = async (req, res, next) => {
    try {
        const review = await getReview(req.params.reviewId);
        sendResponse(res, 200, 'success', review);
    } catch (err) {
        sendResponse(res, 400, 'failed', err.message);
    }
};
