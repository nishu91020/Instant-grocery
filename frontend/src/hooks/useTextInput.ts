import React, { useState } from "react";

type UseTextInputProps<C> = {
	validate: ((value: C) => [error: String, isValid: Boolean]) | null;
};

const useTextInput = <C>(props: UseTextInputProps<C>) => {
	const [value, setValue] = useState<C>();
	const [error, setError] = useState<String>();
	const setTextValue = (currentValue: C) => {
		if (props.validate) {
			let valid = props.validate(currentValue);
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
