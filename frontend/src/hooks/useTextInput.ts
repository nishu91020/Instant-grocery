import React, { useState } from "react";

const useTextInput = <C>() => {
	const [value, setValue] = useState<C>();

	return [value, setValue];
};

export default useTextInput;
