import { Typography, AppBar, Toolbar, Button, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	background: grey[50],
	color: theme.palette.primary.main,
	display: "flex",
	justifyContent: "center",
	height: "45px",
	boxShadow: theme.shadows[2],
}));

const Header = () => {
	const navigate = useNavigate();

	return (
		<StyledAppBar position="sticky">
			<Toolbar sx={{}}>
				<Typography variant="h6" fontWeight={600} sx={{ flexGrow: 1 }}>
					<Link to="/">Instant Grocery</Link>
				</Typography>
				<Button
					onClick={() => {
						navigate("/signin");
					}}>
					Sign in
				</Button>
				<Button
					variant="contained"
					size="small"
					sx={{ margin: "0px 5px" }}
					onClick={() => {
						navigate("/signup");
					}}>
					Sign up
				</Button>
			</Toolbar>
		</StyledAppBar>
	);
};

export default Header;
