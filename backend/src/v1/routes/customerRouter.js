const express = require("express");
const cartRouter = require("./cartRouter");
const customerController = require("../controllers/customerController");

const getAddressRouter = require("./addressRouter");
const Customer = require("../Models/customer");
const { getAuthMiddleware } = require("../middlewares/auth");

const customerRouter = express.Router();

// - /:id                                      GET profile of customer
// - /:id/update                               POST update profile of customer
// - /:id/cart                                 GET get cart of customer

// - /:id/orders/                              GET list of all the orders
// - /:id/orders/:order_id                     GET particular order
// - /:id/orders/                              POST create new order

customerRouter.post("/register", customerController.register);
customerRouter.post("/login", customerController.login);

customerRouter.get("/:id", getAuthMiddleware(Customer), customerController.getProfile);
customerRouter.patch("/:id", getAuthMiddleware(Customer), customerController.updateProfile); //  update profile

customerRouter.use("/cart", getAuthMiddleware(Customer), cartRouter);
customerRouter.get("/:id/cart", getAuthMiddleware(Customer), customerController.getCart);

customerRouter.get("/:id/orders", getAuthMiddleware(Customer), customerController.getOrders);
customerRouter.get(
	"/:id/orders/:orderId",
	getAuthMiddleware(Customer),
	customerController.getOrder,
);
customerRouter.post("/:id/orders", getAuthMiddleware(Customer), customerController.createOrder); // new order

customerRouter.use("/addresses", getAuthMiddleware(Customer), getAddressRouter(Customer));

module.exports = customerRouter;
