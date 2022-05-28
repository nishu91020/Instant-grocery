const express = require("express");
const { sendResponse } = require("../controllers/utility");

const orderRouter = express.Router();

orderRouter.get("/", (req, res, next) => {
	sendResponse(res, 200, "success", {
		message: "order confirmed",
	});
});

orderRouter.get("/:oid", (req, res, next) => {
	sendResponse(res, 200, "success", {
		message: "order aa gya",
	});
});

orderRouter.post("/", (req, res, next) => {
	sendResponse(res, 200, "success", {
		message: "order gya",
	});
});
