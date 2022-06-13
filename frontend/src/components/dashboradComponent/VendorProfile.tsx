import React from 'react';
import { Typography, ListItem, List, Divider, Avatar, ListItemText, ListItemAvatar, ListSubheader } from '@mui/material';
import { vendorDetails } from '../../pages/data';
const VendorProfile = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '4px', margin: '1%' }}>
            <ListSubheader>Vendor Profile</ListSubheader>

            <Divider component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="First Name"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            {vendorDetails.firstName}
                        </Typography>
                    }
                />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="Last Name"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            {vendorDetails.lastName}
                        </Typography>
                    }
                />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="Email"
                    secondary={
                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            {vendorDetails.email}
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    );
};

export default VendorProfile;
