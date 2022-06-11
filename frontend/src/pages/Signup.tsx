import React from 'react';
import { HomeLayout } from '../components/Layouts/HomeLayout';
import SignupComponent from '../components/Authform/SignupComponent';
const Signup = () => {
    return (
        <HomeLayout>
            <SignupComponent title="Sign Up" />
        </HomeLayout>
    );
};

export default Signup;
