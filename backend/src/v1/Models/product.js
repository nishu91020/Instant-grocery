const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: { type: String, required: true, minlength: 3 },
    img: {
        url: String,
        contentType: String
    },
    description: {
        type: String,
        required: true,
        minlength: 20
    },
    vendor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Vendor'
        // required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    reviews: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Review'
            // required: true
        }
    ],
    rating: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: [ 'Available', 'Out Of Stock' ]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
