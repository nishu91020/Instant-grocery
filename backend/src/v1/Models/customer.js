const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { validateHash, generateSalt, generateHash } = require('../utilities/crypto');

const jwt = require('jsonwebtoken');

const CustomerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    address: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Address' } ],
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Order',
            required: true
        }
    ],

    cart: new Schema({
        products: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' } ]
    }),
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

//creating token

CustomerSchema.methods.generateToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'mysecret', { expiresIn: '2 days' });
    user.tokens = user.tokens.concat({ token });
    user.save();
    return token;
};

//login middleware

CustomerSchema.statics.findCustomerByCredential = async (email, password) => {
    const customer = await Customer.findOne({ email });
    if (!customer) {
        throw new Error('Unable to login');
    }
    const [ hash, salt ] = customer.password.split('.');
    const isMatch = validateHash(hash, password, salt);
    if (!isMatch) {
        throw new Error('Unable to login');
    }
    return customer;
};

//hash password before storing
CustomerSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        const salt = generateSalt(16);
        user.password = generateHash(user.password, salt);
        user.password = user.password.concat('.' + salt);
    }
    next();
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
