const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Customer',
        required: true
    },
    products: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Product', required: true } ]
});

const Cart = mongoose.Model('Cart', CartSchema);

module.exports = Cart;
