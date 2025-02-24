import express from "express";
import cors from "cors";
import env from "dotenv";
import dbConnection from "./db/dbConnection.js";
import route from "./routes/routing.js";
import cookieParser from "cookie-parser";
env.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/api",route);

app.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on the http://localhost:${PORT}`);
});



