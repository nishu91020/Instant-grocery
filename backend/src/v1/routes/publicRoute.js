const express = require("express");
const { getProducts, getProduct } = require("../controllers/publicRouterController");
const {
	getAllReviewsOfProduct,
	getOneReviewOfProduct,
	AddReviewToProduct,
	deleteReviewFromProduct,
} = require("../controllers/reviewController");
const { getAuthMiddleware } = require("../middlewares/auth");
const Customer = require("../Models/customer");
const publicRouter = express.Router();

publicRouter.get("/", getProducts);

publicRouter.get("/:productId", getProduct);

publicRouter.get("/:productId/reviews/", getAllReviewsOfProduct);

publicRouter.get("/:productId/reviews/:reviewId", getOneReviewOfProduct);

publicRouter.post("/:productId/reviews/", getAuthMiddleware(Customer), AddReviewToProduct);

publicRouter.delete(
	"/:productId/reviews/:reviewId",
	getAuthMiddleware(Customer),
	deleteReviewFromProduct,
);

module.exports = publicRouter;
