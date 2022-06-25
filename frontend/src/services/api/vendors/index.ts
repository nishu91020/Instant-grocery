import { api } from '..';
import { IAddress, IVendorSignupRequest } from '../../../context/AuthContext/types';

export const registerVendor = async (vendorDetails: IVendorSignupRequest, addressDetails: IAddress) => {
    const res = await api.post('/vendors/register', {
        firstName: vendorDetails.firstName,
        lastName: vendorDetails.lastName,
        businessPhoneNo: vendorDetails.businessPhoneNo,
        businessName: vendorDetails.businessName,
        gstin: vendorDetails.gstin,
        email: vendorDetails.email,
        password: vendorDetails.password,
        address: {
            street: addressDetails.street,
            city: addressDetails.city,
            state: addressDetails.state,
            locality: addressDetails.locality,
            landmark: addressDetails.landmark,
            pincode: addressDetails.pincode,
            contactNumber: addressDetails.contactNumber
        }
    });

    return res.data;
};

export const getDisplayProfile = async (token: String) => {
    const res = await api.get('/vendors/auth/profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
};
