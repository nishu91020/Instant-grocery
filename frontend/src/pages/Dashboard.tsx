import React, { useContext } from 'react';
import VendorProducts from '../components/dashboradComponent/VendorProducts';
import VendorProfile from '../components/dashboradComponent/VendorProfile';
import { AuthContext, AuthContextType } from '../context/AuthContext';

const Dashboard = () => {
    const { vendor, isLoading } = useContext(AuthContext) as AuthContextType;
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <VendorProducts />
            <VendorProfile />
        </div>
    );
};

export default Dashboard;
