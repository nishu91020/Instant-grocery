const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    time: { type: mongoose.SchemaTypes.Date, required: true, default: Date.now() },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'Customer', required: true },
    products: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Product', required: true } ],
    totalCost: { type: Number, required: true },
    address: { type: mongoose.SchemaTypes.ObjectId, ref: 'Address', required: true }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
