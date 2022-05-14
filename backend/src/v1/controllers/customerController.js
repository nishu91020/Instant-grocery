const Customer = require('../Models/customer');

exports.register = async (req, res, next) => {
    try {
        const new_customer = new Customer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });

        const user = await new_customer.save();
        res.send('user saved!!');
    } catch (err) {
        res.status(400).send('error occured !!');
    }
};

exports.login = async (req, res, next) => {
    try {
        const customer = await Customer.findCustomerByCredential(req.email, req.password);
        res.status(200).send(customer);
    } catch (e) {
        res.status(400).send();
    }
};
exports.getProfile = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.status(200).send(customer);
    } catch (err) {
        res.status(400).send('error occured!!');
        next(err);
    }
};

exports.getCart = (req, res, next) => {
    res.send({ data: [ { item1: 'item1', item2: 'item2' } ] });
};

exports.updateProfile = async (req, res, next) => {
    const updates = Object.keys(req.body);
    try {
        const customer = await Customer.findById(req.params.id);
        updates.forEach(update => {
            customer[update] = req.body[update];
        });
        await customer.save();
        res.send(customer);
    } catch (err) {
        res.send(err);
    }
};

exports.createOrder = (req, res, next) => {
    res.send('new order created');
};

exports.getOrders = (req, res, next) => {
    // returns all order's of customer
    res.send({ data: [ { order1: 'order1' }, { order2: 'order2' } ] });
};

exports.getOrder = (req, res, next) => {
    // return single order by id
    res.send({ order1: 'order1' });
};
