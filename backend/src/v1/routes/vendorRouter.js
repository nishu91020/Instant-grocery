const express = require('express');

const customerRouter = express.Router();
const productRouter = require('./productRouter');

customerRouter.use('/products', productRouter);
module.exports = customerRouter;
