import React from 'react';
import { Typography, AppBar, Toolbar, Button, styled,Drawer } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../../context/AuthContext";
import {Sidenav} from "../Sidenav";
import MenuIcon from '@mui/icons-material/Menu';

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
	const { authToken, signout } = useContext(AuthContext) as AuthContextType;
	 const [ open, setOpen ] = React.useState(false);
    const toggleDrawer = (state:boolean) => {
        setOpen(state);
    };
	return (
		<StyledAppBar position="sticky">
			<Toolbar sx={{}}>
				{
					authToken?(
						<>
						<Button onClick={() => toggleDrawer(true)}><MenuIcon /></Button>
						<Drawer onClose={()=>toggleDrawer(false)} open={open}>
							{Sidenav(setOpen)}
						</Drawer>
						</>
						
					):null
				}
				
				<Typography variant="h6" fontWeight={600} sx={{ flexGrow: 1 }}>
                <Link to="/">Instant Grocery</Link>
                </Typography>
				{authToken ? (
					<>
					<Button
						variant="contained"
						size="small"
						sx={{ margin: "0px 5px" }}
						onClick={() => {
							signout();
						}}>
						Sign out
					</Button>
					
					</>
					
				) : (
					<>
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
					</>
				)}
			</Toolbar>
		</StyledAppBar>
	);
};

export default Header;
