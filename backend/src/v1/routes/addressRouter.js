const express = require("express");
const {
	getAllClientAddresses,
	getClientAddress,
	addAddressToClient,
	updateClientAddress,
	deleteClientAddress,
} = require("../controllers/addressController");

function getAddressRouter(Client, idParam) {
	const addressRouter = express.Router();

	// Route to get list of all the Client addresses
	// requires authentication
	addressRouter.get("/", getAllClientAddresses(Client, idParam));

	// Route to get a particular address of a client
	// requires authentication
	addressRouter.get("/:addressId", getClientAddress(Client, idParam));

	// Route to add a new address to a client
	addressRouter.post("/", addAddressToClient(Client, idParam));

	// Route to update address of a client
	addressRouter.patch("/:addressId", updateClientAddress(Client, idParam));

	//Route to delete address of a client
	addressRouter.delete("/:addressId", deleteClientAddress(Client, idParam));

	return addressRouter;
}

module.exports = getAddressRouter;
