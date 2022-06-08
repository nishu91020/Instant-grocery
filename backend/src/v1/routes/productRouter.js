const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { getMulter } = require("../libs/multerConfig");
const { checkIfProductExists } = require("../middlewares/productMiddleWare");
const reviewRouter = require("../routes/reviewRouter");

const upload = getMulter();

router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProduct);
router.post(
	"/:productId/images",
	checkIfProductExists,
	upload.array("images", 4),
	productController.uploadImages,
);
router.post("/:productId/images", checkIfProductExists, productController.getImages);
router.post("/", productController.addProductToInventory);
router.delete("/:productId", productController.deleteProductFromInventory);
router.patch("/:productId", productController.updateProductInInventory);
router.use("/reviews", reviewRouter);

module.exports = router;
