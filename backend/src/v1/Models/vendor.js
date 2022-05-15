const mongoose = require('mongoose');
const { generateSalt, generateHash } = require('../utilities/crypto');

const Schema = mongoose.Schema;

const VendorSchema = Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Order'
        }
    ],
    address: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Address'
        }
    ],
    products: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' } ]
});

// hashing password before saving
VendorSchema.pre('save', function (next) {
    const vendor = this;
    if (vendor.isModified('password')) {
        const salt = generateSalt(16);
        const hash = generateHash(vendor.password, salt);
        this.password = hash.concat('.' + salt);
    }
    next();
});

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;
