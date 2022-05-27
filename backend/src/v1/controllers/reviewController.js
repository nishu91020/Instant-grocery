const { addReview, deleteReview, getAllReviews, getReview } = require("../services/reviewServices");
const Review = require("../Models/review");
const { sendResponse } = require("./utility");

exports.AddReviewToProduct = async (req, res, next) => {
	try {
		const newReview = new Review({
			description: req.body.description,
			customer: customerId,
			rating: rating,
		});
		const review = await addReview(req.params.productId, newReview);
		sendResponse(res, 200, "success", review);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
exports.deleteReviewFromProduct = async (req, res, next) => {
	try {
		await deleteReview(req.params.reviewId, req.params.productId);
		sendResponse(res, 200, "successfully deleted", {});
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
exports.getAllReviewsOfProduct = async (req, res, next) => {
	try {
		const reviews = getAllReviews(req.params.reviewId);
		sendResponse(res, 200, "success", reviews);
	} catch (err) {
		sendResponse(res, 200, "failed", err.message);
	}
};
exports.getOneReviewOfProduct = async (req, res, next) => {
	try {
		const review = await getReview(req.params.reviewId, Review);
		sendResponse(res, 200, "success", review);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
};
