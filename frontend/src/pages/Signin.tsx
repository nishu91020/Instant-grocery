import React from 'react';
import { HomeLayout } from '../components/Layouts/HomeLayout';
import Authform from '../components/Authform';
const Signin = () => {
    return (
        <HomeLayout>
            <Authform title="Signin" />
        </HomeLayout>
    );
};

export default Signin;
