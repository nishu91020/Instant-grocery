const Vendor = require("../Models/vendor");

const addVendor = (req, res, next) => {
	res.status(200).json({
		status: "success",
		data: {
			vendor: {
				message: "Vendor is created",
			},
		},
	});
};

module.exports = {
	addVendor,
};
