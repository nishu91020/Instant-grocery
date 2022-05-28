const { Address } = require("../Models/address");
const {
	addAddress,
	getAllAddresses,
	getAddress,
	updateAddress,
	deleteAddress,
} = require("../services/addressServices");
const { sendResponse } = require("./utility");

exports.addAddressToClient = (Client) => {
	return async function (req, res, next) {
		try {
			const addressObject = {
				street: req.body.street,
				landmark: req.body.landmark,
				locality: req.body.locality,
				state: req.body.state,
				city: req.body.city,
				pincode: req.body.pincode,
				contactNumber: req.body.contactNumber,
			};
			const address = await addAddress(addressObject, Client, req.client._id);
			res.status(200).json({
				status: "success",
				data: {
					vendorId: req.client._id,
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
};

exports.getAllClientAddresses = (Client) => {
	return async function (req, res, next) {
		try {
			//console.log(req.params);
			const addresses = await getAllAddresses(Client, req.client._id);
			res.status(200).json({
				status: "success",
				data: {
					vendorId: req.client._id,
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
};

// TO-DO
// check whether client exists or not

exports.getClientAddress = (Client) => {
	return async function (req, res, next) {
		try {
			const address = await getAddress(req.params.addressId);
			sendResponse(res, 200, "success", {
				vendorId: req.client._id,
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
};

exports.updateClientAddress = (Client) => {
	return async function (req, res, next) {
		try {
			const address = await updateAddress(req.params.addressId, req.body, Client, req.client._id);
			sendResponse(res, 200, "success", {
				vendorId: req.client._id,
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
};

exports.deleteClientAddress = (Client) => {
	return async function (req, res, next) {
		try {
			const address = await deleteAddress(req.params.addressId, Client, req.client._id);
			sendResponse(res, 200, "success", {
				message: "successfully deleted",
				vendorId: req.client._id,
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
};
