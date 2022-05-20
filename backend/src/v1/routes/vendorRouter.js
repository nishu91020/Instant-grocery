const express = require("express");
const {
	addVendor,
	removeVendor,
	getVendors,
	getVendor,
	updateVendor,
} = require("../controllers/vendorController");
const Vendor = require("../Models/vendor");
const getAddressRouter = require("./addressRouter");
const productRouter = require("./productRouter");
const vendorRouter = express.Router();

// attaching product router
vendorRouter.use("/products", productRouter);

// get a list of vendors
vendorRouter.get("/", getVendors);

// get profile of a particular vendor
vendorRouter.get("/:vendorId", getVendor);

// add a new vendor
vendorRouter.post("/register", addVendor);

// update profile of a new vendor
vendorRouter.patch("/:vendorId", updateVendor);

// delete a vendor account
// only for development
vendorRouter.delete("/:vendorId", removeVendor);

vendorRouter.use(getAddressRouter(Vendor, "vendorId"));

module.exports = vendorRouter;
