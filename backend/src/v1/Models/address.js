const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const STATES = [
	"Andhra Pradesh",
	"Arunachal Pradesh",
	"Assam",
	"Bihar",
	"Chhattisgarh",
	"Goa",
	"Gujarat",
	"Haryana",
	"Himachal Pradesh",
	"Jammu and Kashmir",
	"Jharkhand",
	"Karnataka",
	"Kerala",
	"Madhya Pradesh",
	"Maharashtra",
	"Manipur",
	"Meghalaya",
	"Mizoram",
	"Nagaland",
	"Odisha",
	"Punjab",
	"Rajasthan",
	"Sikkim",
	"Tamil Nadu",
	"Telangana",
	"Tripura",
	"Uttar Pradesh",
	"Uttarakhand",
	"West Bengal",
];

const AddressSchema = new Schema({
	streetNo: { type: String, maxlength: 20, required: true },
	landmark: { type: String, maxlength: 50, required: true },
	locality: { type: String, maxlength: 50, required: true },
	city: { type: String, maxlength: 50, required: true },
	state: { type: String, enum: STATES, required: true },
	pincode: { type: String, length: 6, required: true },
	contactNumber: { type: String, length: 12, required: true },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
