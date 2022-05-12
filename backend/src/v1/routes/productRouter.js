const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/addProductToInventory', productController.addProductToInventory);
router.post('/deleteProductFromInventory/:id', productController.deleteProductFromInventory);
router.post('/modifyProductInInventory/:id', productController.modifyProductInInventory);

module.exports = router;
