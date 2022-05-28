const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const reviewRouter = require("../routes/reviewRouter");

router.get("/", productController.getAllProducts);
router.post("/", productController.addProductToInventory);
router.delete("/:id", productController.deleteProductFromInventory);
router.patch("/:id", productController.updateProductInInventory);
router.use("/reviews", reviewRouter);

module.exports = router;
