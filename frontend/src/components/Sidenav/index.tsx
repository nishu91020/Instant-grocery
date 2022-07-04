import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, styled, Typography, useTheme, Link as MaterialLink } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const StyledList = styled(List)(({ theme }) => ({
    color: theme.palette.primary.main,
    display: 'flex',
    width: '250px',
    flexDirection: 'column',
    flex: 1,
    border: '2px solid red'
}));
export const Sidenav = () => {
    const Theme = useTheme();
    return (
        <StyledList>
            <ListItem disablePadding>
                <ListItemButton>
                    <MaterialLink href="/" underline="none">
                        <Typography variant="h6" fontWeight={600} sx={{ flexGrow: 1, paddingBottom: '25px' }}>
                            Instant Grocery
                        </Typography>
                    </MaterialLink>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <MaterialLink href="addproduct" underline="none" sx={{ display: 'flex', flexDirection: 'row' }}>
                        <AddIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Add Product" />
                    </MaterialLink>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <MaterialLink href="addproduct" underline="none" sx={{ display: 'flex', flexDirection: 'row' }}>
                        <LocalGroceryStoreIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Orders" />
                    </MaterialLink>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <MaterialLink href="addproduct" underline="none" sx={{ display: 'flex', flexDirection: 'row' }}>
                        <ManageAccountsIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Update Profile" />
                    </MaterialLink>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <MaterialLink href="addproduct" underline="none" sx={{ display: 'flex', flexDirection: 'row' }}>
                        <AddPhotoAlternateIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Add Address" />
                    </MaterialLink>
                </ListItemButton>
            </ListItem>
        </StyledList>
    );
};
