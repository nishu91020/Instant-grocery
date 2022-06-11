import React from "react";
import { TextField, TextFieldProps, useTheme } from "@mui/material";

interface InputFieldProps {
	label?: String;
	type?: React.HTMLInputTypeAttribute | "text";
	value?: String;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	error?: Boolean;
	errorMessage?: String;
}

const InputField = ({ error, errorMessage, ...restProps }: InputFieldProps & TextFieldProps) => {
	const theme = useTheme();
	return (
		<TextField
			fullWidth
			margin="dense"
			size="small"
			variant="outlined"
			{...restProps}
			error={error}
			helperText={errorMessage}
		/>
	);
};

export default InputField;
