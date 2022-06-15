import "@mui/material/styles";
import { createTheme, PaletteOptions, responsiveFontSizes } from "@mui/material/styles";
import { blueGrey, green, grey, orange } from "@mui/material/colors";
declare module "@mui/material/styles" {
	// allow configuration using `createTheme`
	interface ThemeOptions {
		palette?: PaletteOptions;
	}
}
const theme = createTheme({
	palette: {
		primary: {
			main: green[500],
			light: green[100],
			dark: green[800],
			contrastText: grey[50],
		},
		secondary: {
			main: orange[300],
			light: orange[50],
			dark: orange[500],
		},
	},
});

let Theme = responsiveFontSizes(theme);
export default Theme;
