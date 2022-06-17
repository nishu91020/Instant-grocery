const express = require("express");
const vendorRouter = require("./routes/vendorRouter");
const commerceRouter = require("./routes/commerceRouter");
const errorMiddleWare = require("./middlewares/errorMiddleWare");

const v1Router = express.Router();

v1Router.use("/vendors", vendorRouter);
v1Router.use("/commerce", commerceRouter);
v1Router.use(errorMiddleWare);
module.exports = v1Router;
