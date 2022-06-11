import axios from "axios";

const baseURL = "http://localhost:3001/api/v1";

export const api = axios.create({
	baseURL,
});
