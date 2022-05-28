const express = require("express");
const {
	AddReviewToProduct,
	deleteReviewFromProduct,
	getAllReviewsOfProduct,
	getOneReviewOfProduct,
} = require("../controllers/reviewController");
const Review = require("../Models/review");

const reviewRouter = express.Router();

reviewRouter.post("/:productId", AddReviewToProduct);
reviewRouter.delete("/:productId/reviews/:reviewId", deleteReviewFromProduct);
reviewRouter.get("/:productId/reviews", getAllReviewsOfProduct);
reviewRouter.get("/:productId/reviews/:reviewId", getOneReviewOfProduct);
module.exports = reviewRouter;
