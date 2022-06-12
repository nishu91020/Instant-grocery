export interface IVendor {
    firstName: String;
    lastName: String;
    email: String;
}
export type IVendorSigninRequest = {
    email: String;
    password: String;
};
export type IVendorSignupRequest = IVendor & { password: String };
