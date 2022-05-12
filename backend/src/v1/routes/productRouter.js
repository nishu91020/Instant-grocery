const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/addProductToInventory', productController.addProductToInventory);
router.post('/deleteProductFromInventory', productController.deleteProductFromInventory);
router.post('/modifyProductInInventory', productController.modifyProductInInventory);

module.exports = router;
