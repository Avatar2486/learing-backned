import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.route.js";
import login from "./routes/login.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const rootPath = process.env.ROOT_PATH;
app.use(rootPath, users);
app.use(rootPath, login);

const port = process.env.PORT || 8080;

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
