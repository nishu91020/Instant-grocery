const Vendor = require("../Models/vendor");
const crypto = require("crypto");
const { genSalt, generateHash } = require("./utils");

const {
	addNewVendor,
	removeVendorById,
	getAllVendors,
	findVendorById,
	findVendorByIdAndUpdate,
} = require("../services/vendorServices");

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
	const vendorData = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	};

	try {
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
