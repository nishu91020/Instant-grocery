const { default: mongoose } = require('mongoose');
const { Address } = require('../Models/address');

// TO-DO
// get one address
// update address
// delete address

exports.addAddress = async (addressDetails, Client, clientID) => {
    const client = await Client.findById(mongoose.Types.ObjectId(clientID)).exec();
    if (!client) {
        throw new Error('invalid client id');
    }
    const address = new Address(addressDetails);
    await address.save();
    client.address.push(address);
    await client.save();

    return address;
};

exports.getAllAddresses = async (Client, clientID) => {
    const client = await Client.findById(mongoose.Types.ObjectId(clientID)).populate('address').exec();

    if (!client) {
        throw new Error('invalid client');
    }

    return client.address;
};

exports.getAddress = async addressId => {
    const address = await Address.findById(mongoose.Types.ObjectId(addressId)).exec();

    if (!address) {
        throw new Error('invalid address id');
    }
    return address;
};

exports.updateAddress = async (addressId, addressDetails, Client, clientId) => {
    const MODIFIABLE = [ 'street', 'locality', 'landmark', 'city', 'state', 'pincode', 'contactNumber' ];
    if (!this.checkIfAddressExists(addressId, Client, clientId)) {
        throw new Error('invalid address id');
    }
    const address = await this.getAddress(addressId);
    const keys = Object.keys(addressDetails);
    keys.forEach(key => {
        if (MODIFIABLE.includes(key)) {
            address[key] = addressDetails[key];
        }
        else {
            throw new Error(`invalid property ${key} of address in request`);
        }
    });

    await address.save();

    return address;
};

exports.deleteAddress = async (addressId, Client, clientId) => {
    addressId = await this.removeAddressFromClient(addressId, Client, clientId);
    const address = await Address.findByIdAndDelete(mongoose.Types.ObjectId(addressId)).exec();
    if (!address) {
        throw new Error('invalid address');
    }

    return address;
};

// Utiltiy

exports.checkIfAddressExists = async (addressId, Client, clientId) => {
    const client = await Client.findById(mongoose.Types.ObjectId(clientId)).exec();
    if (!client) {
        throw new Error('Invalid client');
    }

    return client.address.includes(addressId);
};

exports.removeAddressFromClient = async (addressId, Client, clientId) => {
    const client = await Client.findById(mongoose.Types.ObjectId(clientId));
    if (!client) {
        throw new Error('Invalid client');
    }

    if (client.address.includes(addressId)) {
        client.address = client.address.filter(addr => addr !== addressId);
    }
    else {
        throw new Error('invalid address id');
    }

    return addressId;
};
