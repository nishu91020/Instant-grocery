import { Divider, List, ListItem, ListItemText, ListSubheader, useTheme } from "@mui/material/";
import { products } from "../../pages/data";
const VendorProducts = () => {
	const Theme = useTheme();
	return (
		<List
			sx={{
				borderRadius: Theme.shape.borderRadius,
				flexGrow: 1,
				bgcolor: "background.paper",
				position: "relative",
				"& ul": { padding: 0 },
			}}
			subheader={<li />}>
			<ListSubheader>Products</ListSubheader>
			<Divider component="li" />
			{products.map((item, index) => (
				<>
					<ListItem sx={{ borderBottom: `1.5px solid ${Theme.palette.grey[300]}` }} key={index}>
						<ListItemText primary={`${item.name}`} secondary={`${item.description}`} />
					</ListItem>
				</>
			))}
		</List>
	);
};
export default VendorProducts;
