import React from 'react';
import {
    Typography,
    ListItem,
    List,
    Divider,
    Avatar,
    ListItemText,
    ListItemAvatar,
    ListSubheader,
    Grid,
    CardActions,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { vendorDetails } from '../../pages/data';
import ProfilePhoto from '../../img/profile.png';
const VendorProfile = () => {
    const Theme = useTheme();
    const match = useMediaQuery('(max-width:420px)');

    return (
        <Card sx={{ display: 'flex', flexDirection: `${match ? 'column' : 'row'}`, alignItems: 'center', padding: `${Theme.spacing(2)}` }}>
            <CardMedia component="img" image={ProfilePhoto} sx={{ maxWidth: '150px', height: 'auto', aspectRatio: 1, borderRadius: '50%' }} />
            <CardContent sx={{ flex: 1, marginLeft: Theme.spacing(3) }}>
                <Grid container flexDirection="column">
                    <Grid container item flexDirection="column">
                        <Typography variant="h4">Nishu Rai</Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid container item flexDirection="column" xs={3}>
                        <Typography variant="h6">email</Typography>
                        <Typography>nishurai123@email.com</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default VendorProfile;
