const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.addProductToInventory);
router.delete('/:id', productController.deleteProductFromInventory);
router.patch('/:id', productController.updateProductInInventory);

module.exports = router;
