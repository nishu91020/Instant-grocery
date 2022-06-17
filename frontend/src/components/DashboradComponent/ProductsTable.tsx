import {
	Divider,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
	useTheme,
} from "@mui/material";
import { maxHeight } from "@mui/system";
import React from "react";
import products from "../../pages/data";

const ProductsTable = () => {
	const Theme = useTheme();

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handlePageChange = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Paper>
			<TableContainer component={Paper} sx={{ maxHeight: 650 }}>
				<Typography
					variant="h5"
					marginBottom={Theme.spacing(2)}
					marginLeft={Theme.spacing(3)}
					marginTop={Theme.spacing(3)}>
					Products
				</Typography>
				<Divider />
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Quantity</TableCell>
							<TableCell>Rating</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
							<TableRow
								key={product.id.toString()}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component="th" scope="row">
									{product.id}
								</TableCell>
								<TableCell>{product.name}</TableCell>
								<TableCell>{product.type}</TableCell>
								<TableCell>{product.price.toString()}</TableCell>
								<TableCell>{product.quantity.toString()}</TableCell>
								<TableCell>{product.rating.toString()}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 15, 20, 25]}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={handleRowsPerPageChange}
				onPageChange={handlePageChange}
				page={page}
				count={products.length}
			/>
		</Paper>
	);
};

export default ProductsTable;
