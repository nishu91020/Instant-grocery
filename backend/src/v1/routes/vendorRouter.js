const express = require("express");

const vendorRouter = express.Router();
const cartRouter = require("./cartRouter");

vendorRouter.use("/cart", cartRouter);
module.exports = vendorRouter;
