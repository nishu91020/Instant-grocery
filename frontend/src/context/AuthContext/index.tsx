import React from "react";
import { api } from "../../services/api";
import { IVendor, IVendorSignupRequest, IVendorSigninRequest } from "./types";

export interface AuthContextType {
	vendor: IVendor | null;
	authToken: String | undefined;
	isLoading: Boolean;
	signup: (vendorDetails: IVendorSignupRequest) => void;
	signin: (vendorDetails: IVendorSigninRequest) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

type AuthContextProviderProps = {
	children?: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
	const [vendor, setVendor] = React.useState<IVendor | null>(null);
	const [authToken, setAuthToken] = React.useState<String>();
	const [isLoading, setIsLoading] = React.useState<Boolean>(false);

	const signup = async (vendorDetails: IVendorSignupRequest) => {
		try {
			setIsLoading(true);
			console.log("sending request");
			const res = await api.post("/vendors/register", {
				firstName: vendorDetails.firstName,
				lastName: vendorDetails.lastName,
				email: vendorDetails.email,
				password: vendorDetails.password,
			});

			console.log(res);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	const signin = async (vendorDetails: IVendorSigninRequest) => {
		try {
			console.log("sending request");
			const res = await api.post("/vendors/login", {
				email: vendorDetails.email,
				password: vendorDetails.password,
			});
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AuthContext.Provider value={{ vendor, authToken, isLoading, signup, signin }}>
			{children}
		</AuthContext.Provider>
	);
};
