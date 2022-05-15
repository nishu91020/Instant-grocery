const Vendor = require("../Models/vendor");
const {
	addAddress,
	getAllAddresses,
	getAddress,
	updateAddress,
	deleteAddress,
} = require("../services/addressServices");

const {
	addNewVendor,
	removeVendorById,
	getAllVendors,
	findVendorById,
	findVendorByIdAndUpdate,
} = require("../services/vendorServices");
const { sendResponse } = require("./utility");

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

exports.addVendorAddress = async (req, res, next) => {
	try {
		const address = await addAddress(req.body.address, Vendor, req.params.vendorId);
		res.status(200).json({
			status: "success",
			data: {
				address,
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

exports.getAllVendorAddresses = async (req, res, next) => {
	try {
		const addresses = await getAllAddresses(Vendor, req.params.vendorId);
		res.status(200).json({
			status: "success",
			data: {
				vendorId: req.params.vendorId,
				addresses,
			},
		});
	} catch (err) {
		res.status(200).json({
			status: "failed",
			data: {
				error: {
					message: err.message,
				},
			},
		});
	}
};

exports.getVendorAddress = async (req, res, next) => {
	try {
		const address = await getAddress(req.params.addressId);
		sendResponse(res, 200, "success", {
			vendorId: req.params.vendorId,
			address: address,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.updateVendorAddress = async (req, res, next) => {
	try {
		const address = await updateAddress(
			req.params.addressId,
			req.body.address,
			Vendor,
			req.params.vendorId,
		);
		sendResponse(res, 200, "success", {
			vendorId: req.params.vendorId,
			address: address,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.deleteVendorAddress = async (req, res, next) => {
	try {
		const address = await deleteAddress(req.params.addressId, Vendor, req.params.vendorId);
		sendResponse(res, 200, "success", {
			message: "successfully deleted",
			vendorId: req.params.vendorId,
			address: address,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};
