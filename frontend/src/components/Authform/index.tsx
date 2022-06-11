import React from "react";
import { FormHelperText, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputField from "./InputField";
import FormButton from "./FormButton";
import useTextInput from "../../hooks/useTextInput";

const StyledPaper = styled(Paper)(({ theme }) => ({
	width: "340px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	color: theme.palette.primary.main,
	padding: [theme.spacing(2), theme.spacing(4)],
	justifyContent: "center",
}));

const Authform = (props: { title: String }) => {
	const [firstName, firstNameError, setFirstName, setFirstNameError] = useTextInput({});
	const [lastName, lastNameError, setLastName, setLastNameError] = useTextInput({});
	const [email, emailError, setEmail, setEmailError] = useTextInput({});
	const [password, passwordError, setPassword, setPasswordError] = useTextInput({});
	const [confirmPassword, confirmError, setConfirmPassword, setConfirmError] = useTextInput({});

	// validating confirm password
	const validateConfirmPassword = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		e.preventDefault();

		if (confirmPassword === password) setConfirmError("");
		else setConfirmError("passwords do not match");
	};

	return (
		<StyledPaper>
			<Typography variant="h6" fontWeight={600}>
				{props.title}
			</Typography>
			<InputField
				label="First Name"
				type="text"
				value={firstName}
				required
				onChange={(e) => {
					setFirstName(e.target.value);
				}}
			/>
			<InputField
				label="Last Name"
				type="text"
				value={lastName}
				required
				onChange={(e) => {
					setLastName(e.target.value);
				}}
			/>
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
			{props.title === "Signup" ? (
				<>
					<InputField
						label="Confirm Password"
						type="password"
						required
						value={confirmPassword}
						error={Boolean(confirmError)}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
						}}
						onBlur={validateConfirmPassword}
					/>
				</>
			) : (
				""
			)}
			<FormButton ButtonName={props.title === "Signup" ? "Signup" : "Signin"} />
			<Typography>
				<Link to="/">Forgot Password?</Link>
			</Typography>
			{props.title === "Signup" ? (
				<Typography>
					Already have an account?<Link to="/signin">Signin</Link>
				</Typography>
			) : (
				<Typography>
					Don't Have an account?<Link to="/signup">Signup</Link>
				</Typography>
			)}
		</StyledPaper>
	);
};

export default Authform;
