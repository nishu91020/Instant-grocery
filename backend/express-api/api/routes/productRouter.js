const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/addProductToInventory', productController.addProductToInventory_post);
router.post('/deleteProductFromInventory', productController.deleteProductFromInventory_post);
router.post('/modifyProductInInventory', productController.modifyProductInInventory_post);

module.exports = router;
