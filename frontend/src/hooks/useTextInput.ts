import React, { useState } from "react";

export interface ValidateReturnTypes {
	error: String;
	isValid: Boolean;
}
interface UseTextInputProps {
	initialValue?: String | "";
}

const useTextInput = ({ initialValue }: UseTextInputProps) => {
	const [value, setValue] = useState<String>(initialValue || "");
	const [error, setError] = useState<String>("");
	const setTextValue = (currentValue: String) => {
		setValue(currentValue);
	};
	return [value, error, setTextValue, setError] as const;
};

export default useTextInput;
