import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { ThemeProvider, styled } from '@mui/material/styles';
import Theme from './Themes';
import { Box, Typography } from '@mui/material';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Header from './components/Header';
import { AuthContext, AuthContextType, AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';

const StyledRoot = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.light,
    height: '100vh'
}));

function App () {
    const { authToken } = useContext(AuthContext) as AuthContextType;
    return (
        <ThemeProvider theme={Theme}>
            <StyledRoot>
                <Header />
                {authToken ? (
                    <Routes>
                        <Route path="/">
                            <Route index element={<Dashboard />} />
                        </Route>
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                )}
            </StyledRoot>
        </ThemeProvider>
    );
}

export default App;
