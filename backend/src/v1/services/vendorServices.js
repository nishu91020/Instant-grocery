const mongoose = require("mongoose");
const { Address } = require("../Models/address");
const Vendor = require("../Models/vendor");

exports.addNewVendor = async function (vendorDetails) {
	const vendor = new Vendor(vendorDetails);
	await vendor.save();
	return vendor;
};

exports.removeVendorById = async function (vendorId) {
	vendorId = mongoose.Types.ObjectId(vendorId);
	const vendor = await Vendor.findById(vendorId).exec();
	if (!vendor) {
		throw new Error("vendor doesn't exists");
	}

	//removing all addresses of the vendor
	vendor.address.forEach(addr => {
		await Address.findByIdAndDelete(mongoose.Types.ObjectId(addr));
	})
	//deleting the vendor
	vendor = await Vendor.findByIdAndDelete(vendor._id).exec();
	return vendor;
};

exports.getAllVendors = async function () {
	const vendors = await Vendor.find().exec();
	return vendors;
};

exports.findVendorById = async function (vendorId) {
	vendorId = mongoose.Types.ObjectId(vendorId);
	const vendor = await Vendor.findById(vendorId).exec();
	return vendor;
};

exports.findOne = async function (vendorDetails) {
	const vendor = await Vendor.findOne(vendorDetails).exec();
	return vendor;
};

exports.findVendorByIdAndUpdate = async function (vendorId, vendorDetails) {
	vendorId = mongoose.Types.ObjectId(vendorId);
	const MODIFIABLE = ["password"];
	const NON_MODIFIABLE = ["firstName", "lastName", "email", "orders", "products", "address"];
	const vendor = await Vendor.findById(vendorId).exec();
	if (!vendor) {
		throw new Error("vendor doesn't exists");
	}
	const keys = Object.keys(vendorDetails).forEach((key) => {
		if (MODIFIABLE.includes(key)) {
			vendor[key] = vendorDetails[key];
		} else {
			if (NON_MODIFIABLE.includes(key)) {
				throw new Error(`${key} property is not modifiable`);
			} else {
				throw new Error(`${key} property is invalid`);
			}
		}
	});

	await vendor.save();
	return vendor;
};
