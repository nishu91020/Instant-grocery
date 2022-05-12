const express = require('express');
const { addVendor } = require('../controllers/vendorController');
const productRouter = require('./productRouter');
const vendorRouter = express.Router();
vendorRouter.use('/products', productRouter);
vendorRouter.post('/', addVendor);

module.exports = vendorRouter;
