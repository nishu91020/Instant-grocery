const express = require("express");
const { createOrder, getAllOrders, getOrder } = require("../controllers/orderController");
const { sendResponse } = require("../controllers/utility");

const orderRouter = express.Router();

orderRouter.get("/", getAllOrders);

orderRouter.get("/:oid", getOrder);

orderRouter.post("/", createOrder);

module.exports = orderRouter;
