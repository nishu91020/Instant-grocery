exports.sendResponse = (res, status, statusMessage, data) => {
	res.status(status).json({
		status: statusMessage,
		data: data,
	});
};
