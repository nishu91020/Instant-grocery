const express = require("express");
const { addVendor } = require("../controllers/vendorController");

const vendorRouter = express.Router();

vendorRouter.post("/", addVendor);

module.exports = vendorRouter;
