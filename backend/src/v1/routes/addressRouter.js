const express = require("express");
const {
	getAllClientAddresses,
	getClientAddress,
	addAddressToClient,
	updateClientAddress,
	deleteClientAddress,
} = require("../controllers/addressController");

function getAddressRouter(Client) {
	const addressRouter = express.Router();

	const baseRoute = `/addresses`;
	// Route to get list of all the Client addresses
	// requires authentication
	addressRouter.get(`/`, getAllClientAddresses(Client));

	// Route to get a particular address of a client
	// requires authentication
	addressRouter.get(`/:addressId`, getClientAddress(Client));

	// Route to add a new address to a client
	addressRouter.post(`/`, addAddressToClient(Client));

	// Route to update address of a client
	addressRouter.patch(`/:addressId`, updateClientAddress(Client));

	//Route to delete address of a client
	addressRouter.delete(`/:addressId`, deleteClientAddress(Client));

	return addressRouter;
}

module.exports = getAddressRouter;
