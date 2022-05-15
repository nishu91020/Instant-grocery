const express = require('express');
const cartRouter = require('./cartRouter');
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/auth');

const customerRouter = express.Router();

// - /:id                                      GET profile of customer
// - /:id/update                               POST update profile of customer
// - /:id/cart                                 GET get cart of customer

// - /:id/orders/                              GET list of all the orders
// - /:id/orders/:order_id                     GET particular order
// - /:id/orders/                              POST create new order

customerRouter.post('/register', customerController.register);
customerRouter.post('/login', customerController.login);
customerRouter.get('/:id', authMiddleware, customerController.getProfile);
customerRouter.patch('/:id', authMiddleware, customerController.updateProfile); //  update profile

customerRouter.use('/cart', authMiddleware, cartRouter);
customerRouter.get('/:id/cart', authMiddleware, customerController.getCart);

customerRouter.get('/:id/orders', authMiddleware, customerController.getOrders);
customerRouter.get('/:id/orders/:orderId', authMiddleware, customerController.getOrder);
customerRouter.post('/:id/orders', authMiddleware, customerController.createOrder); // new order

module.exports = customerRouter;
