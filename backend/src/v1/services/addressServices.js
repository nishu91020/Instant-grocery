const { default: mongoose } = require("mongoose");
const { Address } = require("../Models/address");

// TO-DO
// get one address
// update address
// delete address

exports.addAddress = async (addressDetails, Client, clientID) => {
	const address = new Address(addressDetails);
	await address.save();
	const client = await Client.findById(mongoose.Types.ObjectId(clientID)).exec();
	client.address.push(address);
	await client.save();

	return address;
};

exports.getAllAddresses = async (Client, clientID) => {
	const client = await Client.findById(mongoose.Types.ObjectId(clientID))
		.populate("address")
		.exec();
	return client.address;
};

exports.getAddress = async (addressId) => {
	const address = await Address.findById(
		mongoose.Types.ObjectId(mongoose.Types.ObjectId(addressId)),
	).exec();
	return address;
};
