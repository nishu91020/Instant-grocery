const { Address } = require("../Models/address");
const Vendor = require("../Models/vendor");
const { addAddress } = require("../services/addressServices");
const { loginUser, generateToken } = require("../services/authServices");

const {
	addNewVendor,
	removeVendorById,
	getAllVendors,
	findVendorById,
	findVendorByIdAndUpdate,
} = require("../services/vendorServices");
const { sendResponse, validateRequestBody } = require("./utility");

// TO-DO
// add authentication to vendors
// change req.params.id to req.client._id
exports.loginVendor = async (req, res, next) => {
	try {
		const vendorDetails = { email: req.body.email, password: req.body.password };
		const token = await loginUser(Vendor, vendorDetails);
		sendResponse(res, 200, "success", {
			token,
		});
	} catch (err) {
		next({
			status: 400,
			message: err.message,
		});
	}
};

// getVendor is going to be used by customer side
// -- so in this route we will return vendor's display profile and products

exports.getVendor = async (req, res, next) => {
	try {
		const vendor = await findVendorById(req.params.vendorId);
		sendResponse(res, 200, "success", {
			vendor: {
				profile: vendor.displayProfile,
			},
		});
	} catch (err) {
		next({
			status: 400,
			message: err.message,
		});
	}
};

// get profile of a signed-in vendor
exports.getProfile = async (req, res, next) => {
	try {
		const vendor = await findVendorById(req.client._id);
		if (!vendor) {
			throw new Error("invalid client");
		}

		sendResponse(res, 200, "success", {
			vendor: vendor.displayProfile,
		});
	} catch (err) {
		next({
			status: 400,
			message: err.message,
		});
	}
};

// Add a new Vendor
exports.addVendor = async (req, res, next) => {
	try {
		const REQUIRED = [
			"firstName",
			"lastName",
			"email",
			"password",
			"businessPhoneNo",
			"businessName",
			"gstin",
			"address",
		];

		const vendorData = validateRequestBody(REQUIRED, req.body);

		const address = vendorData.address;

		address.contactNumber = vendorData.businessPhoneNo;
		delete vendorData.address;

		const vendor = await addNewVendor(vendorData);

		// adding address to the vendor;
		const { client, _ } = await addAddress(address, Vendor, vendor._id);

		const token = await generateToken(client);

		sendResponse(res, 200, "success", {
			vendor: client.profile,
			token,
		});
	} catch (err) {
		next({
			status: 400,
			message: err.message,
		});
	}
};

// Remove Vendor
// only for development
exports.removeVendor = async (req, res, next) => {
	try {
		const vendor = await removeVendorById(req.client._id);
		sendResponse(res, 200, "success", {
			vendor: vendor.displayProfile,
		});
	} catch (err) {
		next({
			status: 400,
			message: err.message,
		});
	}
};

// to be removed
exports.getVendors = async (req, res, next) => {
	try {
		const vendors = await getAllVendors();
		sendResponse(res, 200, "success", {
			vendors,
		});
	} catch (err) {
		next({
			status: 400,
			message: err.message,
		});
	}
};

exports.updateVendor = async (req, res, next) => {
	try {
		// find the particular vendor;
		const vendor = await findVendorByIdAndUpdate(req.client._id, req.body);
		sendResponse(res, 200, "success", {
			vendor: vendor.displayProfile,
		});
	} catch (err) {
		next({
			status: 400,
			message: err.message,
		});
	}
};
