import { api } from "..";
import { IVendorSignupRequest } from "../../../context/AuthContext/types";

export const registerVendor = async (vendorDetails: IVendorSignupRequest) => {
	const res = await api.post("/vendors/register", {
		firstName: vendorDetails.firstName,
		lastName: vendorDetails.lastName,
		email: vendorDetails.email,
		password: vendorDetails.password,
	});

	return res.data;
};

export const getDisplayProfile = async (token: String) => {
	const res = await api.get("/vendors/auth/profile", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return res.data;
};
