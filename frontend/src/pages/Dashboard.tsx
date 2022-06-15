import React, { useContext } from 'react';
import StatsCard from '../components/dashboradComponent/StatsCard';
import VendorProducts from '../components/dashboradComponent/VendorProducts';
import VendorProfile from '../components/dashboradComponent/VendorProfile';
import { AuthContext, AuthContextType } from '../context/AuthContext';
import { Grid, useTheme } from '@mui/material';

const Dashboard = () => {
    const Theme = useTheme();
    const { vendor, isLoading } = useContext(AuthContext) as AuthContextType;
    return (
        <Grid container sx={{ padding: `${Theme.spacing(3)}` }} spacing={3} flexDirection="column">
            <Grid item>
                <VendorProfile />
            </Grid>

            <Grid container item flexDirection="row" spacing={2} justifyContent="center">
                <Grid item xs={6} lg={3}>
                    <StatsCard label="Total Earning" value="12000000" />
                </Grid>
                <Grid item xs={6} lg={3}>
                    <StatsCard label="Total Profit" value="1025006" />
                </Grid>
                <Grid item xs={6} lg={3}>
                    <StatsCard label="Total Items sold" value="1230" />
                </Grid>
                <Grid item xs={6} lg={3}>
                    <StatsCard label="Total Products" value="56000" />
                </Grid>
            </Grid>
            <Grid item>
                <VendorProducts />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
