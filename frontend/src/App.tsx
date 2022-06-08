import React from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import Theme from './Themes';
import { Typography } from '@mui/material';

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
            <CustomParagraph>
                <h1>Hello World</h1>
            </CustomParagraph>
        </ThemeProvider>
    );
}

export default App;
