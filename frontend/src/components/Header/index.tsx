import React from 'react';
import { Typography, AppBar, Toolbar, Button, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: grey[50],
    color: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    height: '45px'
}));

const Header = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar sx={{}}>
                <Typography variant="h6" fontWeight={600} sx={{ flexGrow: 1 }}>
                    INSTANT GROCERY
                </Typography>
                <Button variant="outlined" size="small" sx={{ margin: '0px 5px' }}>
                    SIGNUP
                </Button>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
