const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = Schema({
<<<<<<< HEAD
    name: { type: String, required: true, minlength: 3 },
    img: {
        type: String,
        required: true
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
=======
	name: { type: String, required: true, minlength: 3 },
	images: [
		{
			url: String,
			contentType: String,
		},
	],
	description: {
		type: String,
		required: true,
		minlength: 20,
	},
	vendor: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Vendor",
		// required: true
	},
	price: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	reviews: [
		{
			type: mongoose.SchemaTypes.ObjectId,
			ref: "Review",
			// required: true
		},
	],
	rating: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		required: true,
		enum: ["Available", "Out Of Stock"],
	},
>>>>>>> 6b653133736d93ae9f6f9d12388a05e09f6314e3
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
