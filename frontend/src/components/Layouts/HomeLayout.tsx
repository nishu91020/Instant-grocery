import { useTheme } from "@mui/material/styles";
import { Grid, styled, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

type HomeLayoutProps = {
	children: React.ReactNode;
};

const ImageGrid = styled(Grid)(({ theme }) => ({
	height: "100%",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
}));

const ImageBox = styled(Box)(({ theme }) => ({
	borderRadius: "50%",
	height: "90vh",
	width: "90vw",
	backgroundImage: "url(/img/hero.jpg)",
	backgroundPosition: "center",
	backgroundSize: "cover",
	borderWidth: "10px",
	borderColor: theme.palette.secondary.main,
	borderStyle: "solid",
}));

export const HomeLayout = ({ children }: HomeLayoutProps) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Grid container spacing={2} sx={{ height: "95%" }}>
			<Grid container item xs={12} md={6} alignItems="center" justifyContent={"center"}>
				{children}
			</Grid>
			{matches && (
				<ImageGrid item xs={6} alignItems="center" justifyContent={"center"}>
					<ImageBox />
				</ImageGrid>
			)}
		</Grid>
	);
};
