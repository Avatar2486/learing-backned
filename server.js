import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.route.js";
dotenv.config();

const app = express();
app.use(cors);

const port = process.env.PORT || 8080;
app.use(process.env.ROOT_PATH, users);
// console.log("Port: " + port);

app.listen(port, (err, res) => {
	if (err) throw err;
	console.log(`Server is running on port ${port}`);
});
