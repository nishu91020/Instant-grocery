const express = require("express");
const { sendResponse } = require("../controllers/utility");
const publicRouter = express.Router();
const Product = require("../Models/product");
const reviewRouter = require("./reviewRouter");

publicRouter.get("/", async (req, res, next) => {
	try {
		const productsInInventory = await Product.find({});
		sendResponse(res, 200, "success", productsInInventory);
	} catch (err) {
		sendResponse(res, 400, "failed", err.message);
	}
});

publicRouter.use("/reviews", reviewRouter);

module.exports = publicRouter;
