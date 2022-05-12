const mongoose = require("mongoose");
const Vendor = require("../Models/vendor");

exports.addNewVendor = async function (vendorDetails) {
	const vendor = new Vendor(vendorDetails);
	await vendor.save();
	return vendor;
};

exports.removeVendorById = async function (vendorId) {
	const _id = mongoose.Types.ObjectId(vendorId);
	const vendor = await Vendor.findByIdAndDelete(_id).exec();
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
	const vendor = await Vendor.findByIdAndUpdate(vendorId, vendorDetails).exec();
	return vendor;
};
