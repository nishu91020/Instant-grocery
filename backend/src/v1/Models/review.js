const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = Schema({
	description: {
		type: String,
		minlength: 3,
		required: true,
	},
	rating: {
		type: Number,
		enum: [1, 2, 3, 4, 5],
		required: true,
	},
	customer: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Customer",
		required: true,
	},
});
const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
