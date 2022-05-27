const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add/:productId', cartController.addToCart);
router.delete('/delete/:productId', cartController.removeFromCart);

module.exports = router;
