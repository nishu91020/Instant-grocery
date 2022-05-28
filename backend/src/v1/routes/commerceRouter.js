const express = require("express");
const customerRouter = require("./customerRouter");
const publicRouter = require("./publicRoute");

const commerceRouter = express.Router();

commerceRouter.use("/customers", customerRouter);
commerceRouter.use("/products", publicRouter);

module.exports = commerceRouter;
