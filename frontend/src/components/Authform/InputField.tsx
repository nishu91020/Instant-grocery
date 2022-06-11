import React from "react";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
	OutlinedInputProps,
	TextField,
	TextFieldProps,
} from "@mui/material";

interface InputFieldProps {
	label?: String;
	type?: React.HTMLInputTypeAttribute | "text";
	value?: String;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps & TextFieldProps) => {
	return <TextField fullWidth margin="normal" size="small" variant="outlined" {...props} />;
};

type InputFieldControlProps = {
	label?: String;
	value?: String;
	type?: React.HTMLInputTypeAttribute | "text";
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	error?: Boolean;
	errorMessage?: String;
};

export default InputField;
