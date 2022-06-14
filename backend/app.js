const express = require("express");
const cors = require("cors");
const path = require("path");
const v1Router = require("./src/v1");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve("./config/.env") });
require("./src/db/connection.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", v1Router);

app.listen(3001, () => {
	console.log("listning on port 3001");
});
