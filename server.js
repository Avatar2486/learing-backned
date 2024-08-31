import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors);

const port = process.env.PORT || 8080;

app.listen(port,(err, res) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});
