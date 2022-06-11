import React from 'react';
import { HomeLayout } from '../components/Layouts/HomeLayout';
import SigninComponent from '../components/Authform/SigninComponent';
const Signin = () => {
    return (
        <HomeLayout>
            <SigninComponent title="Sign In" />
        </HomeLayout>
    );
};

export default Signin;
