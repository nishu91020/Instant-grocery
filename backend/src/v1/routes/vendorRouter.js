const express = require('express');
const { addVendor, removeVendor, getVendors, getVendor, updateVendor, loginVendor, getProfile } = require('../controllers/vendorController');
const { getAuthMiddleware } = require('../middlewares/auth');
const Vendor = require('../Models/vendor');
const getAddressRouter = require('./addressRouter');
const productRouter = require('./productRouter');
const vendorRouter = express.Router();

// add a new vendor
vendorRouter.post('/register', addVendor);
vendorRouter.post('/login', loginVendor);

// attaching product router--
vendorRouter.use('/products', getAuthMiddleware(Vendor), productRouter);

// get a list of vendors
vendorRouter.get('/', getAuthMiddleware(Vendor), getVendors);

// get public profile of a particular vendor
vendorRouter.get('/public/:vendorId', getVendor);

// get profile of a logged in vendor
vendorRouter.get('/auth/profile', getAuthMiddleware(Vendor), getProfile);

// update profile of a new vendor
vendorRouter.patch('/auth/update', getAuthMiddleware(Vendor), updateVendor);

// delete a vendor account
vendorRouter.delete('/', getAuthMiddleware(Vendor), removeVendor);

vendorRouter.use(getAuthMiddleware(Vendor), getAddressRouter(Vendor));

module.exports = vendorRouter;
