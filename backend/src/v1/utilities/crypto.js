const crypto = require("crypto");

const genSalt = (size) => {
	return crypto.randomBytes(size).toString("hex");
};

const generateHash = (password, salt) => {
	return crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
};

const validateHash = (hash, password, salt) => {
	const _hash = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
	return hash === _hash;
};

module.exports = {
	genSalt,
	generateHash,
	validateHash,
};
