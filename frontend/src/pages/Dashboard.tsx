import StatsCard from '../components/DashboradComponent/StatsCard';
import VendorProducts from '../components/DashboradComponent/VendorProducts';
import VendorProfile from '../components/DashboradComponent/VendorProfile';

import { Grid, useTheme } from '@mui/material';
import ProductsTable from '../components/DashboradComponent/ProductsTable';

const Dashboard = () => {
    const Theme = useTheme();
    return (
        <Grid container sx={{ padding: `${Theme.spacing(3)} ${Theme.spacing(1)}` }} spacing={2} flexDirection="column">
            <Grid item container>
                <Grid item flex={1}>
                    <VendorProfile />
                </Grid>
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
            <Grid item container>
                {/* <VendorProducts />
				 */}
                <Grid item flex={1} sx={{ overflow: 'auto' }}>
                    <ProductsTable />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
