export interface IVendor {
	firstName: String;
	lastName: String;
	email: String;
}

export type IVendorRequest = IVendor & { password: String };
