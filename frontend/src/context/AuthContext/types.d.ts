export interface IVendor {
    firstName: String;
    lastName: String;
    email: String;
}
export type IVendorSigninRequest = {
    email: String;
    password: String;
};
export type IAddress = {
    street: String;
    city: String;
    state: String;
    pincode: String;
    locality: String;
    landmark: String;
    contactNumber: String;
};
export type IVendorSignupRequest = IVendor & {
    businessPhoneNo: String;
    gstin: String;
    businessName: String;
    password: String;
};
