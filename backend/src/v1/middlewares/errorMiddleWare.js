// let error = {
//     status: 400,
//     message: "",
//     param: ""
// }

/**
 *
 * @param {Object} err
 * @param {Request} req
 * @param {Response} res
 * @param {} next
 */

module.exports = function (err, req, res, next) {
	console.log(err);
	res.status(err.status).json({
		status: err.status,
		message: err.message,
	});
};
