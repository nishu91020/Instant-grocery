const { validateHash } = require("../utilities/crypto");
const jwt = require("jsonwebtoken");

const TOKEN_EXPIRATION_TIME = 2 * 24 * 60 * 60 * 1000;

exports.loginUser = async (Client, clientDetails) => {
	const client = await Client.findOne({ email: clientDetails.email });
	if (!client) {
		throw new Error("invalid email or password");
	}

	const [hash, salt] = client.password.split(".");
	const isMatch = validateHash(hash, clientDetails.password, salt);
	if (!isMatch) {
		throw new Error("invalid email or password");
	}

	return await this.generateToken(client);
};

exports.generateToken = async (client) => {
	const token = jwt.sign({ _id: client._id.toString() }, "mysecret", { expiresIn: "2 days" });
	client.tokens = client.tokens.concat({
		token: token,
		deleteAt: new Date(Date.now() + TOKEN_EXPIRATION_TIME),
	});

	await client.save();
	return token;
};
