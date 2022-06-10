import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { HomeLayout } from "../components/Layouts/HomeLayout";

const Home = () => {
	return (
		<HomeLayout>
			<Box>
				<Typography variant="h3" paragraph>
					Instant Grocery
				</Typography>
				<Typography variant="body1" paragraph>
					Your one stop shop for all the fruits and veggies you want to eat
				</Typography>
				<Button variant="contained"> Get Started</Button>
			</Box>
		</HomeLayout>
	);
};

export default Home;
