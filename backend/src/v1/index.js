const express = require('express');
const vendorRouter = require('./routes/vendorRouter');
const customerRouter = require('./routes/customerRouter');

const v1Router = express.Router();

v1Router.use('/vendor', vendorRouter);
v1Router.use('/customer', customerRouter);

module.exports = v1Router;
