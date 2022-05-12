const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/", productController.addProductToInventory);
router.post("/:id", productController.deleteProductFromInventory);
router.patch("/:id", productController.modifyProductInInventory);

module.exports = router;
