import '@mui/material/styles';
import { createTheme, PaletteOptions, responsiveFontSizes } from '@mui/material/styles';
import { green, grey, orange } from '@mui/material/colors';
declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    interface ThemeOptions {
        palette?: PaletteOptions;
    }
    interface TypographyOptions {
        typography?: TypographyOptions;
    }
}
const theme = createTheme({
    palette: {
        primary: {
            main: green[300],
            light: green[50],
            dark: green[500],
            contrastText: grey[900]
        },
        secondary: {
            main: orange[300],
            light: orange[50],
            dark: orange[500]
        }
    },
    typography: {}
});

let Theme = responsiveFontSizes(theme);
export default Theme;
