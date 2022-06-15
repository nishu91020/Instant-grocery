import React, { useContext } from "react";
import {
	Typography,
	Divider,
	Grid,
	Card,
	CardContent,
	CardMedia,
	useTheme,
	useMediaQuery,
} from "@mui/material";

import ProfilePhoto from "../../img/profile.png";
import { AuthContext, AuthContextType } from "../../context/AuthContext";
const VendorProfile = () => {
	const Theme = useTheme();
	const match = useMediaQuery("(max-width:420px)");
	const { vendor } = useContext(AuthContext) as AuthContextType;

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: `${match ? "column" : "row"}`,
				alignItems: "center",
				padding: `${Theme.spacing(1)} ${Theme.spacing(2)}`,
			}}>
			<CardMedia
				component="img"
				image={ProfilePhoto}
				sx={{ maxWidth: "100px", height: "auto", aspectRatio: 1, borderRadius: "50%" }}
			/>
			<CardContent sx={{ flex: 1, marginLeft: Theme.spacing(3) }}>
				<Grid container flexDirection="column">
					<Grid container item flexDirection="column">
						<Typography variant="h5">
							{vendor?.firstName} {vendor?.lastName}
						</Typography>
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Grid container item flexDirection="column" xs={3}>
						<Typography>{vendor?.email}</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default VendorProfile;
