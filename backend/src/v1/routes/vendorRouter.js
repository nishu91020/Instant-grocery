const express = require("express");
const {
	addVendor,
	removeVendor,
	getVendors,
	getVendor,
	updateVendor,
} = require("../controllers/vendorController");
const productRouter = require("./productRouter");
const vendorRouter = express.Router();

// attaching product router
vendorRouter.use("/products", productRouter);

vendorRouter.get("/", getVendors);
vendorRouter.get("/:vendorId", getVendor);
vendorRouter.post("/", addVendor);
vendorRouter.patch("/:vendorId", updateVendor);
vendorRouter.delete("/:vendorId", removeVendor);

module.exports = vendorRouter;
