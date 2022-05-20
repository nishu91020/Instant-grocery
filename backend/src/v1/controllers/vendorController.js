const Vendor = require("../Models/vendor");

const {
	addNewVendor,
	removeVendorById,
	getAllVendors,
	findVendorById,
	findVendorByIdAndUpdate,
} = require("../services/vendorServices");
const { sendResponse, validateRequestBody } = require("./utility");

exports.getVendor = async (req, res, next) => {
	try {
		const vendor = await findVendorById(req.params.vendorId);
		res.status(200).json({
			status: "success",
			data: {
				vendor,
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

// Add a new Vendor
exports.addVendor = async (req, res, next) => {
	try {
		const REQUIRED = ["firstName", "lastName", "email", "password"];
		const vendorData = validateRequestBody(REQUIRED, req.body);
		const vendor = await addNewVendor(vendorData);
		res.status(200).json({
			status: "success",
			data: {
				vendor,
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
		const vendor = await removeVendorById(req.params.vendorId);
		res.status(200).json({
			status: "success",
			data: {
				vendor,
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
		const vendor = await findVendorByIdAndUpdate(req.params.vendorId, req.body);
		res.status(200).json({
			status: "success",
			data: {
				vendor,
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
