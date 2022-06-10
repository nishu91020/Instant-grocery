import React, { useState } from "react";

type UseTextInputProps<C extends String> = {
	validate?: ((value: C) => [error: String, isValid: Boolean]) | null;
};

const useTextInput = <C extends String>({validate}: UseTextInputProps<C>) => {
	const [value, setValue] = useState<C>();
	const [error, setError] = useState<String>();
	const setTextValue = (currentValue: C) => {
		if (validate) {
			let valid = validate(currentValue);
			if (valid[1]) {
				setValue(currentValue);
			} else {
				setError(valid[0]);
			}
		} else {
			setValue(currentValue);
			setError("");
		}
	};
	return [value, error, setTextValue];
};

export default useTextInput;
