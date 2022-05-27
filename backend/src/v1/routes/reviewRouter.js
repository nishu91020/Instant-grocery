const express = require("express");
const router = express.Router();
const {
	AddReviewToProduct,
	deleteReviewFromProduct,
	getAllReviewsOfProduct,
	getOneReviewOfProduct,
} = require("../controllers/reviewController");

router.get("/:productId", AddReviewToProduct);
router.post("/:productId/delete/reviewId", deleteReviewFromProduct);
router.get("/:productId/reviews", getAllReviewsOfProduct);
router.get("/:productId/reviews/:reviewId", getOneReviewOfProduct);

module.exports = router;
