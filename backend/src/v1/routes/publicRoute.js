const express = require("express");
const { getProducts, getProduct } = require("../controllers/publicRouterController");
const { sendResponse } = require("../controllers/utility");
const publicRouter = express.Router();
const Product = require("../Models/product");
const reviewRouter = require("./reviewRouter");

publicRouter.get("/", getProducts);

publicRouter.get("/:productId", getProduct);

publicRouter.use("/reviews", reviewRouter);

module.exports = publicRouter;
