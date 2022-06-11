import React from "react";
import { HomeLayout } from "../components/Layouts/HomeLayout";
import Authform from "../components/Authform";
const Signup = () => {
	return (
		<HomeLayout>
			<Authform title="Sign Up" />
		</HomeLayout>
	);
};

export default Signup;
