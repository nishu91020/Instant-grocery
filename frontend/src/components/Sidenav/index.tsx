import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, styled, Typography, useTheme, Link as MaterialLink } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const StyledList = styled(List)(({ theme }) => ({
    color: theme.palette.primary.main,
    display: 'flex',
    width: '250px',
    flexDirection: 'column',
    flex: 1
}));
const StyledNavLink = styled(NavLink)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}));

export const Sidenav = (setOpen: (open: boolean) => void) => {
    const Theme = useTheme();
    return (
        <StyledList>
            <ListItem disablePadding>
                <StyledNavLink
                    to="/"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <ListItemButton>
                        <Typography variant="h6" fontWeight={600} sx={{ flexGrow: 1, paddingBottom: '25px' }}>
                            Instant Grocery
                        </Typography>
                    </ListItemButton>
                </StyledNavLink>
            </ListItem>

            <ListItem disablePadding>
                <StyledNavLink
                    to="/addproduct"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <ListItemButton>
                        <AddIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Add Product" />
                    </ListItemButton>
                </StyledNavLink>
            </ListItem>

            <ListItem disablePadding>
                <StyledNavLink
                    to="addproduct"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <ListItemButton>
                        <LocalGroceryStoreIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Orders" />
                    </ListItemButton>
                </StyledNavLink>
            </ListItem>

            <ListItem disablePadding>
                <StyledNavLink
                    to="addproduct"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <ListItemButton>
                        <ManageAccountsIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Update Profile" />
                    </ListItemButton>
                </StyledNavLink>
            </ListItem>

            <ListItem disablePadding>
                <StyledNavLink
                    to="addproduct"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <ListItemButton>
                        <AddPhotoAlternateIcon sx={{ color: Theme.palette.primary.main }} />
                        <ListItemText primary="Add Address" />
                    </ListItemButton>
                </StyledNavLink>
            </ListItem>
        </StyledList>
    );
};
