const Vendor = require("../Models/vendor");
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
		sendResponse(res, 400, "failed", {
			error: err.message,
		});
	}
};

// getVendor is going to be used by customer side
// -- so in this route we will return vendor's display profile and products

exports.getVendor = async (req, res, next) => {
	try {
		const vendor = await findVendorById(req.params.vendorId);
		res.status(200).json({
			status: "success",
			data: {
				vendor: {
					profile: vendor.displayProfile,
					products: vendor.products,
				},
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "failed",
			data: {
				error: {
					message: err.message,
				},
			},
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
		console.log(err);
		sendResponse(res, 400, "failed", {
			error: err.message,
		});
	}
};

// Add a new Vendor
exports.addVendor = async (req, res, next) => {
	try {
		const REQUIRED = ["firstName", "lastName", "email", "password"];
		const vendorData = validateRequestBody(REQUIRED, req.body);
		const vendor = await addNewVendor(vendorData);
		const token = generateToken(vendor);
		res.status(200).json({
			status: "success",
			data: {
				vendor: vendor.displayProfile,
				token,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "failed",
			data: {
				error: {
					message: err.message,
				},
			},
		});
	}
};

// Remove Vendor
// only for development
exports.removeVendor = async (req, res, next) => {
	try {
		const vendor = await removeVendorById(req.client._id);
		res.status(200).json({
			status: "success",
			data: {
				vendor: vendor.displayProfile,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "failed",
			data: {
				error: {
					message: err.message,
				},
			},
		});
	}
};

// to be removed
exports.getVendors = async (req, res, next) => {
	try {
		const vendors = await getAllVendors();
		res.status(200).json({
			status: "success",
			data: {
				vendors,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "failed",
			data: {
				error: {
					message: err.message,
				},
			},
		});
	}
};

exports.updateVendor = async (req, res, next) => {
	try {
		// find the particular vendor;
		const vendor = await findVendorByIdAndUpdate(req.client._id, req.body);
		res.status(200).json({
			status: "success",
			data: {
				vendor: vendor.displayProfile,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "failed",
			data: {
				error: {
					message: error.message,
				},
			},
		});
	}
};
