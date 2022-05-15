const jwt = require('jsonwebtoken');
const Customer = require('../Models/customer');

const authMiddleware = async (req, res, next) => {
    try {
        token = req.header('Authorization').replace('Bearer ', '');
        decoded = jwt.verify(token, 'mysecret');
        const customer = Customer.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!customer) {
            throw new Error('you are not authenticated to access this route, please authenticate!');
        }
        req.customer = customer;
        next();
    } catch (e) {
        res.status(401).send('unauthorized!!');
    }
};
module.exports = authMiddleware;
