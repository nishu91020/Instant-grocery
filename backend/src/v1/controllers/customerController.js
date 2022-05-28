const Customer = require("../Models/customer");
const { loginUser, generateToken } = require("../services/authServices");
const { sendResponse, validateRequestBody } = require("./utility");

exports.register = async (req, res, next) => {
	try {
		const REQUIRED = ["firstName", "lastName", "email", "password"];
		const customerDetails = validateRequestBody(REQUIRED, req.body);
		const newCustomer = new Customer(customerDetails);
		const customer = await newCustomer.save();
		const token = generateToken(customer);

		sendResponse(res, 200, "success", {
			customer: customer.displayProfile,
			token,
		});
	} catch (err) {
		sendResponse(res, 400, "failed", {
			error: {
				message: err.message,
			},
		});
	}
};

exports.login = async (req, res, next) => {
	try {
		const token = await loginUser(Customer, req.body);
		sendResponse(res, 200, "success", {
			token,
		});
	} catch (e) {
		res.status(400).send(e.message);
	}
};
exports.getProfile = async (req, res, next) => {
	try {
		const customer = await Customer.findById(req.client._id);
		res.status(200).send(customer);
	} catch (err) {
		res.status(400).send("error occured!!");
		next(err);
	}
};

exports.updateProfile = async (req, res, next) => {
	const updates = Object.keys(req.body);
	try {
		const customer = await Customer.findById(req.client._id);
		updates.forEach((update) => {
			customer[update] = req.body[update];
		});
		await customer.save();
		res.send(customer);
	} catch (err) {
		res.send(err);
	}
};
