const jwt = require("jsonwebtoken");
const { sendResponse } = require("../controllers/utility");

exports.getAuthMiddleware = (Client) => async (req, res, next) => {
	try {
		console.log(req.header("Authorization"));
		token = req.header("Authorization").replace("Bearer ", "");
		decoded = jwt.verify(token, "mysecret");
		const client = await Client.findOne({ _id: decoded._id, "tokens.token": token });
		if (!client) {
			throw new Error("you are not authenticated to access this route, please authenticate!");
		}
		req.client = client;
		next();
	} catch (e) {
		sendResponse(res, 400, "failed", {
			error: {
				message: e.message,
			},
		});
	}
};
