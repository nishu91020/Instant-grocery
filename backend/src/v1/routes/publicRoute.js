const express = require("express");
const { sendResponse } = require("../controllers/utility");
const router = express.Router();
const Product = require("../Models/product");

router.get("/", async (req, res, next) => {
	try {
		const productsInInventory = await Product.find({});
		sendResponse(res, 200, "success", productsInInventory);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
});
module.exports = router;
