const express = require("express");
const vendorRouter = require("./routes/vendorRouter");
const commerceRouter = require("./routes/commerceRouter");

const v1Router = express.Router();

v1Router.use("/vendors", vendorRouter);
v1Router.use("/commerce", commerceRouter);
module.exports = v1Router;
