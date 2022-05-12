exports.genSalt = (size) => {
	return crypto.randomBytes(size).toString("hex");
}
exports.generateHash = (password, salt)=> {
	return crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
}