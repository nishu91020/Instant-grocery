import React, { useContext, useState } from 'react';
import { Button, FormGroup, Paper, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import InputField from './InputField';
import useTextInput from '../../hooks/useTextInput';
import { IVendorSignupRequest, IAddress } from '../../context/AuthContext/types';
import { AuthContext, AuthContextType } from '../../context/AuthContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: '320px',
    display: 'flex',
    borderRadius: '8px',
    minHeight: '460px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: [ theme.spacing(2), theme.spacing(4) ],
    justifyContent: 'center'
}));

const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& > * + *': {
        marginBottom: theme.spacing(2)
    }
}));

const SignupComponent = (props: { title: String }) => {
    const theme = useTheme();
    const { signup } = useContext(AuthContext) as AuthContextType;
    const [ toggle, setToggle ] = useState(true);
    const [ firstName, firstNameError, setFirstName, setFirstNameError ] = useTextInput({});
    const [ lastName, lastNameError, setLastName, setLastNameError ] = useTextInput({});
    const [ email, emailError, setEmail, setEmailError ] = useTextInput({});
    const [ password, passwordError, setPassword, setPasswordError ] = useTextInput({});
    const [ confirmPassword, confirmError, setConfirmPassword, setConfirmError ] = useTextInput({});
    const [ businessPhoneNo, businessPhoneNoError, setBusinessPhoneNo, setBusinessNumberError ] = useTextInput({});
    const [ gstin, gstinError, setGstin, setGstinError ] = useTextInput({});
    const [ businessName, businessNameError, setBusinessName, setBusinessNameError ] = useTextInput({});

    const [ address, setAddress ] = React.useState<IAddress | null>(null);
    const [ street, streetError, setStreet, setStreetError ] = useTextInput({});
    const [ landmark, landmarkError, setLandmark, setLandmarkError ] = useTextInput({});
    const [ locality, localityError, setLocality, setLocalityError ] = useTextInput({});
    const [ city, cityError, setCity, setCityError ] = useTextInput({});
    const [ state, stateError, setState, setStateError ] = useTextInput({});
    const [ pincode, pincodeError, setPincode, setPincodeError ] = useTextInput({});
    const [ contactNumber, contactNumberError, setContactNumber, setContactNumberError ] = useTextInput({});

    // validating confirm password
    const validateConfirmPassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();

        if (confirmPassword === password) setConfirmError('');
        else setConfirmError('passwords do not match');
    };
    const validateEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regexp.test(email.valueOf())) {
            setEmailError('invalid email');
            return;
        }
        else {
            setEmailError('');
        }
    };
    const validatePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        if (password.length < 8) {
            setPasswordError('password is weak');
            return;
        }
        else {
            setPasswordError('');
        }
    };
    const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const vendorDetails: IVendorSignupRequest = {
            firstName,
            lastName,
            businessPhoneNo,
            businessName,
            gstin,
            email,
            password
        };
        const addressDetails: IAddress = {
            street,
            city,
            state,
            locality,
            landmark,
            pincode,
            contactNumber
        };
        signup(vendorDetails, addressDetails);
    };

    return !toggle ? (
        <StyledPaper>
            <StyledForm>
                <InputField
                    label="street"
                    value={street}
                    onChange={e => {
                        setStreet(e.target.value);
                    }}
                />
                <InputField
                    label="landmark"
                    value={landmark}
                    onChange={e => {
                        setLandmark(e.target.value);
                    }}
                />
                <InputField
                    label="locality"
                    value={locality}
                    onChange={e => {
                        setLocality(e.target.value);
                    }}
                />
                <InputField
                    label="city"
                    value={city}
                    onChange={e => {
                        setCity(e.target.value);
                    }}
                />
                <InputField
                    label="state"
                    value={state}
                    onChange={e => {
                        setState(e.target.value);
                    }}
                />
                <InputField
                    label="pincode"
                    value={pincode}
                    onChange={e => {
                        setPincode(e.target.value);
                    }}
                />
                <InputField
                    label="contactNumber"
                    value={contactNumber}
                    onChange={e => {
                        setContactNumber(e.target.value);
                    }}
                />
                <Button fullWidth onClick={submitForm} variant="contained" size="small">
                    Signup
                </Button>
            </StyledForm>
        </StyledPaper>
    ) : (
        <StyledPaper>
            <StyledForm>
                <Typography color={theme.palette.primary.main} variant="h5" fontWeight={600}>
                    {props.title}
                </Typography>
                <FormGroup>
                    <InputField
                        label="First Name"
                        value={firstName}
                        required
                        onChange={e => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <InputField
                        label="Last Name"
                        value={lastName}
                        required
                        onChange={e => {
                            setLastName(e.target.value);
                        }}
                    />
                    <InputField
                        label="Business Phone No"
                        value={businessPhoneNo}
                        type="tel"
                        required
                        onChange={e => {
                            setBusinessPhoneNo(e.target.value);
                        }}
                    />
                    <InputField
                        label="GST number"
                        value={gstin}
                        required
                        onChange={e => {
                            setGstin(e.target.value);
                        }}
                    />
                    <InputField
                        label="Business Name"
                        type="text"
                        value={businessName}
                        onChange={e => {
                            setBusinessName(e.target.value);
                        }}
                    />
                    <InputField
                        label="Email"
                        type="email"
                        value={email}
                        required
                        error={Boolean(emailError)}
                        errorMessage={emailError}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        onBlur={validateEmail}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        value={password}
                        required
                        error={Boolean(passwordError)}
                        errorMessage={passwordError}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        onBlur={validatePassword}
                    />
                    <InputField
                        label="Confirm Password"
                        type="password"
                        required
                        value={confirmPassword}
                        error={Boolean(confirmError)}
                        errorMessage={confirmError}
                        onChange={e => {
                            setConfirmPassword(e.target.value);
                        }}
                        onBlur={validateConfirmPassword}
                    />
                </FormGroup>
                <FormGroup sx={{ width: '100%' }}>
                    <Button variant="contained" fullWidth size="small" onClick={e => setToggle(!toggle)}>
                        Next
                    </Button>
                </FormGroup>
                <FormGroup sx={{ textAlign: 'center' }}>
                    <Typography color={theme.palette.primary.main}>
                        <Link to="/">Forgot Password?</Link>
                    </Typography>
                    {props.title === 'Sign Up' ? (
                        <Typography>
                            Already have an account?{' '}
                            <Link style={{ color: theme.palette.primary.main }} to="/signin">
                                Sign-in
                            </Link>
                        </Typography>
                    ) : (
                        <Typography>
                            Don't Have an account?{' '}
                            <Link style={{ color: theme.palette.primary.main }} to="/signup">
                                Sign-up
                            </Link>
                        </Typography>
                    )}
                </FormGroup>
            </StyledForm>
        </StyledPaper>
    );
};

export default SignupComponent;
