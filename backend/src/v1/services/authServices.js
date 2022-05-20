const { validateHash } = require("../utilities/crypto");
const jwt = require("jsonwebtoken");
exports.loginUser = async (Client, clientDetails) => {
	const client = await Client.findOne({ email: clientDetails.email });
	if (!client) {
		throw new Error("Unable to login");
	}

	const [hash, salt] = client.password.split(".");
	const isMatch = validateHash(hash, clientDetails.password, salt);
	if (!isMatch) {
		throw new Error("Unable to login");
	}

	return this.generateToken(client);
};

exports.generateToken = (client) => {
	const token = jwt.sign({ _id: client._id.toString() }, "mysecret", { expiresIn: "2 days" });
	client.tokens = client.tokens.concat({ token });
	client.save();
	return token;
};
