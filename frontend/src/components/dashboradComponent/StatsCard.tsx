import { Gradient } from "@mui/icons-material";
import { Typography, Card, CardContent, CardHeader, useTheme } from "@mui/material";
import React from "react";

const StatsCard = (props: { label: String; value: String }) => {
	const Theme = useTheme();
	const colorP = Theme.palette.primary.main;
	const colorD = Theme.palette.primary.dark;
	return (
		<Card
			sx={{
				width: "100%",
				borderRadius: "4px",
				maxHeight: "300px",
				flex: 1,
				background: `linear-gradient(to bottom right,${colorP},${colorD})`,
				position: "relative",
				color: "white",
				overflow: "auto",
			}}>
			<CardContent>
				<Typography variant="h6">{props.label}</Typography>
				<Typography>{props.value}</Typography>
			</CardContent>
		</Card>
	);
};

export default StatsCard;
