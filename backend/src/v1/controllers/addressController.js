const { addAddress, getAllAddresses, getAddress, updateAddress, deleteAddress } = require('../services/addressServices');
const { sendResponse } = require('./utility');

exports.addAddressToClient = (Client, idParam) => {

	return async function (req, res, next) {
		try {
			const address = await addAddress(req.body.address, Client, req.client._id);
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
			console.log(req.params);
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
			const address = await updateAddress(
				req.params.addressId,
				req.body.address,
				Client,
				req.client._id,
			);
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
