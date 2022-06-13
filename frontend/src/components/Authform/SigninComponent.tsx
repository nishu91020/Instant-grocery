import React, { useContext } from "react";
import { Button, FormGroup, Paper, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputField from "./InputField";
import FormButton from "./FormButton";
import useTextInput from "../../hooks/useTextInput";
import { IVendorSigninRequest } from "../../context/AuthContext/types";
import { AuthContext, AuthContextType } from "../../context/AuthContext";

const StyledPaper = styled(Paper)(({ theme }) => ({
	width: "320px",
	display: "flex",
	borderRadius: "8px",
	minHeight: "460px",
	flexDirection: "column",
	alignItems: "center",
	padding: [theme.spacing(2), theme.spacing(4)],
	justifyContent: "center",
}));

const StyledForm = styled("form")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	"& > * + *": {
		marginBottom: theme.spacing(2),
	},
}));

const SigninComponent = (props: { title: String }) => {
	const theme = useTheme();
	const { signin } = useContext(AuthContext) as AuthContextType;
	const [email, emailError, setEmail, setEmailError] = useTextInput({});
	const [password, passwordError, setPassword, setPasswordError] = useTextInput({});
	const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		const vendorDetails: IVendorSigninRequest = {
			email,
			password,
		};
		signin(vendorDetails);
	};
	return (
		<StyledPaper>
			<StyledForm>
				<Typography color={theme.palette.primary.main} variant="h5" fontWeight={600}>
					{props.title}
				</Typography>
				<FormGroup>
					<InputField
						label="Email"
						type="email"
						value={email}
						required
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<InputField
						label="Password"
						type="password"
						value={password}
						required
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</FormGroup>
				<FormGroup sx={{ width: "100%" }}>
					<Button variant="contained" fullWidth size="small" onClick={submitForm}>
						Signin
					</Button>
				</FormGroup>
				<FormGroup sx={{ textAlign: "center" }}>
					<Typography color={theme.palette.primary.main}>
						<Link to="/">Forgot Password?</Link>
					</Typography>
					<Typography>
						Don't Have an account?{" "}
						<Link style={{ color: theme.palette.primary.main }} to="/signup">
							Sign-up
						</Link>
					</Typography>
				</FormGroup>
			</StyledForm>
		</StyledPaper>
	);
};

export default SigninComponent;
