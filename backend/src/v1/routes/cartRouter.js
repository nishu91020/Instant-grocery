const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController");

cartRouter.get("/", cartController.getCustomerCart);
cartRouter.patch("/", cartController.updateCustomerCart);
cartRouter.post("/add/:productId", cartController.addToCart);
cartRouter.delete("/delete/:productId", cartController.removeFromCart);

module.exports = cartRouter;
