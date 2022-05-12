const Vendor = require("../Models/vendor");
const crypto = require("crypto");
const {genSalt, generateHash} = require("./utils")

const addVendor = async (req, res, next) => {
	const salt =  genSalt(16)
	const vendorData = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: {
			salt: salt,
			hash: generateHash(req.body.password, salt),
		},
	};

	try {
		const vendor = new Vendor(vendorData);
		await vendor.save();

		res.status(200).json({
			status: "success",
		});
	} catch (err) {}
};

module.exports = {
	addVendor,
};
