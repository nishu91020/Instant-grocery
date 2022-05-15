const express = require("express");
const {
	addVendor,
	removeVendor,
	getVendors,
	getVendor,
	updateVendor,
	addVendorAddress,
	getAllVendorAddresses,
	getVendorAddress,
	updateVendorAddress,
	deleteVendorAddress,
} = require("../controllers/vendorController");
const productRouter = require("./productRouter");
const vendorRouter = express.Router();

// attaching product router
vendorRouter.use("/products", productRouter);

// get a list of vendors
vendorRouter.get("/", getVendors);

// get profile of a particular vendor
vendorRouter.get("/:vendorId", getVendor);

// add a new vendor
vendorRouter.post("/", addVendor);

// update profile of a new vendor
vendorRouter.patch("/:vendorId", updateVendor);

// delete a vendor account
// only for development
vendorRouter.delete("/:vendorId", removeVendor);

// TO-DO
// 1) route to add address
// 2) route to update address
// 3) route to get a particular address
// 4) route to get list of addresses
// 5) delete address

// Route to add a new address to the vendors profile
// requires authentication
vendorRouter.post("/:vendorId/addresses", addVendorAddress);

// Route to get a list of all the address
// requires authentication
vendorRouter.get("/:vendorId/addresses", getAllVendorAddresses);

// Route to get a particular address
// requires authentication
vendorRouter.get("/:vendorId/addresses/:addressId", getVendorAddress);

// Route to update the address of a vendor
// requires authentication
vendorRouter.patch("/:vendorId/addresses/:addressId", updateVendorAddress);

//Route to delete the address of a vendor
//requires authentication
vendorRouter.delete("/:vendorId/addresses/:addressId", deleteVendorAddress);

module.exports = vendorRouter;
