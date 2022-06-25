import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { getDisplayProfile, registerVendor } from '../../services/api/vendors';
import { IVendor, IVendorSignupRequest, IVendorSigninRequest, IAddress } from './types';

export interface AuthContextType {
    vendor: IVendor | null;
    authToken: String | undefined;
    isLoading: Boolean;
    errorMessage: String | undefined;
    signup: (vendorDetails: IVendorSignupRequest, addressDetails: IAddress) => void;
    signin: (vendorDetails: IVendorSigninRequest) => void;
    signout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
    vendor: null,
    authToken: undefined,
    isLoading: false,
    errorMessage: undefined,
    signin (vendorDetails) {
        return;
    },
    signup (vendorDetails, addressDetails) {
        return;
    },
    signout () {
        return;
    }
});

type AuthContextProviderProps = {
    children?: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
    const [ vendor, setVendor ] = React.useState<IVendor | null>(null);
    const [ authToken, setAuthToken ] = React.useState<String>();
    const [ isLoading, setIsLoading ] = React.useState<Boolean>(false);
    const [ errorMessage, setErrorMessage ] = React.useState<String>();

    const navigate = useNavigate();

    const fetchToken = () => {
        setIsLoading(true);
        const token = localStorage.getItem('authToken') || '';
        setAuthToken(token);
        setIsLoading(false);
    };

    useEffect(
        () => {
            async function fetchAuthDetails () {
                fetchToken();
                if (authToken) {
                    const res = await getDisplayProfile(authToken || '');
                    setVendor(res.vendor);
                }
            }

            fetchAuthDetails();
        },
        [ authToken ]
    );

    const signup = async (vendorDetails: IVendorSignupRequest, addressDetails: IAddress) => {
        try {
            setIsLoading(true);
            console.log('sending request');
            const { token } = await registerVendor(vendorDetails, addressDetails);
            setAuthToken(token);
            localStorage.setItem('authToken', token);
            const res = await getDisplayProfile(token);
            setVendor(res.vendor);
            console.log(res.vendor);
            navigate('/', { replace: true });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    const signin = async (vendorDetails: IVendorSigninRequest) => {
        try {
            setIsLoading(true);
            console.log('sending request');
            const res = await api.post('/vendors/login', {
                email: vendorDetails.email,
                password: vendorDetails.password
            });
            localStorage.setItem('authToken', res.data.token);
            const data = await getDisplayProfile(res.data.token);
            setVendor(data.vendor);
            setAuthToken(res.data.token);
            console.log(data.vendor);
            navigate('/', { replace: true });
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const signout = () => {
        localStorage.clear();
        setAuthToken('');
        setVendor(null);
    };

    return <AuthContext.Provider value={{ vendor, authToken, isLoading, errorMessage, signup, signin, signout }}>{children}</AuthContext.Provider>;
};
