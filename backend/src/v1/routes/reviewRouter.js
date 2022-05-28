const express = require('express');
const router = express.Router();
const { AddReviewToProduct, deleteReviewFromProduct, getAllReviewsOfProduct, getOneReviewOfProduct } = require('../controllers/reviewController');
const Review = require('../Models/review');

router.post('/:productId', AddReviewToProduct);
router.delete('/:productId/delete/:reviewId', deleteReviewFromProduct);
router.get('/:productId/reviews', getAllReviewsOfProduct);
router.get('/:productId/reviews/:reviewId', getOneReviewOfProduct);
module.exports = router;
