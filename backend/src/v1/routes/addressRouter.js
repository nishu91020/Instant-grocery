const express = require("express");
const {
	getAllClientAddresses,
	getClientAddress,
	addAddressToClient,
	updateClientAddress,
	deleteClientAddress,
} = require("../controllers/addressController");

function getAddressRouter(Client, route, idParam) {
	const addressRouter = express.Router();
	const clientId = idParam;
	console.log(idParam);

	const baseRoute = `/:${idParam}/addresses`;
	// Route to get list of all the Client addresses
	// requires authentication
	addressRouter.get(`${baseRoute}/`, getAllClientAddresses(Client, idParam));

	// Route to get a particular address of a client
	// requires authentication
	addressRouter.get(`${baseRoute}/:addressId`, getClientAddress(Client, idParam));

	// Route to add a new address to a client
	addressRouter.post(`${baseRoute}/`, addAddressToClient(Client, idParam));

	// Route to update address of a client
	addressRouter.patch(`${baseRoute}/:addressId`, updateClientAddress(Client, idParam));

	//Route to delete address of a client
	addressRouter.delete(`${baseRoute}/:addressId`, deleteClientAddress(Client, idParam));

	return addressRouter;
}

module.exports = getAddressRouter;
