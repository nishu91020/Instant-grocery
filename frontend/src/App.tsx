import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { ThemeProvider, styled } from '@mui/material/styles';
import Theme from './Themes';
import { Typography } from '@mui/material';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const CustomParagraph = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.dark,
    transition: theme.transitions.easing.easeInOut,
    transitionDuration: '800ms',
    '&:hover': {
        color: theme.palette.primary.light
    }
}));

function App () {
    return (
        <ThemeProvider theme={Theme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
