import { FormControl, FormHelperText, InputLabel, TextField, TextFieldProps } from "@mui/material";
import React from "react";

type InputFieldControlProps = {
	label?: String;
	name?: String;
	type?: React.HTMLInputTypeAttribute | "text";
	value?: String;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	error?: Boolean;
	errorMessage?: String;
};

const InputFieldControl = ({
	label,
	name,
	type,
	value,
	onChange,
	error,
	errorMessage,
	...restProps
}: InputFieldControlProps & TextFieldProps) => {
	return (
		<FormControl error={error}>
			{/* <InputLabel htmlFor={`for-${name}`}>{label}</InputLabel> */}
			<TextField
				label={label}
				name={name}
				value={value}
				type={type}
				onChange={onChange}
				// margin={"normal"}
				{...restProps}
			/>
			{error && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
};

export default InputFieldControl;
