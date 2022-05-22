const express = require("express");
const {
	addVendor,
	removeVendor,
	getVendors,
	getVendor,
	updateVendor,
	loginVendor,
} = require("../controllers/vendorController");
const { getAuthMiddleware } = require("../middlewares/auth");
const Vendor = require("../Models/vendor");
const getAddressRouter = require("./addressRouter");
const productRouter = require("./productRouter");
const vendorRouter = express.Router();

// add a new vendor
vendorRouter.post("/register", addVendor);
vendorRouter.post("/login", loginVendor);

// attaching product router
vendorRouter.use("/products", getAuthMiddleware(Vendor), productRouter);

// get a list of vendors
vendorRouter.get("/", getAuthMiddleware(Vendor), getVendors);

// get profile of a particular vendor
vendorRouter.get("/:vendorId", getAuthMiddleware(Vendor), getVendor);

// update profile of a new vendor
vendorRouter.patch("/:vendorId", getAuthMiddleware(Vendor), updateVendor);

// delete a vendor account
vendorRouter.delete("/:vendorId", getAuthMiddleware(Vendor), removeVendor);

vendorRouter.use(getAuthMiddleware(Vendor), getAddressRouter(Vendor));

module.exports = vendorRouter;
