exports.sendResponse = (res, status, statusMessage, data) => {
	res.status(status).json({
		status: statusMessage,
		...data,
	});
};

exports.validateRequestBody = (REQUIRED, body) => {
	const bodyKeys = Object.keys(body);
	const details = {};
	bodyKeys.forEach((key) => {
		if (REQUIRED.includes(key)) {
			details[key] = body[key];
		} else {
			throw new Error(`invalid property ${key} in body`);
		}
	});

	return details;
};
