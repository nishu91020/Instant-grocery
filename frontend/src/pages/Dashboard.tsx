import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/AuthContext";

const Dashboard = () => {
	const { vendor, isLoading } = useContext(AuthContext) as AuthContextType;

	return (
		<Card>
			<CardContent>
				{vendor && (
					<>
						<Typography>{vendor.email}</Typography>
						<Typography>{vendor.firstName}</Typography>
						<Typography>{vendor.lastName}</Typography>
					</>
				)}
			</CardContent>
		</Card>
	);
};

export default Dashboard;
