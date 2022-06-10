import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import InputField from './InputField';
import FormButton from './FormButton';
import useTextInput from '../../hooks/useTextInput';

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: '340px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.main,
    padding: theme.spacing(2),
    justifyContent: 'center'
}));
const Authform = (props: { title: String }) => {
    return (
        <StyledPaper>
            <Typography variant="h6" fontWeight={600}>
                {props.title}
            </Typography>
            <InputField label="First Name" type="text" />
            <InputField label="Last Name" type="text" />
            <InputField label="Email" type="email" />
            <InputField label="Password" type="password" />
            {props.title === 'Signup' ? <InputField label="Confirm Password" type="password" /> : ''}
            <FormButton ButtonName={props.title === 'Signup' ? 'Signup' : 'Signin'} />
            <Typography>
                <Link to="/">Forgot Password?</Link>
            </Typography>
            {props.title === 'Signup' ? (
                <Typography>
                    Already have an account?<Link to="/signin">Signin</Link>
                </Typography>
            ) : (
                <Typography>
                    Don't Have an account?<Link to="/signup">Signup</Link>
                </Typography>
            )}
        </StyledPaper>
    );
};

export default Authform;
