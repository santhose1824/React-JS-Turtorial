import express from "express";
import cors from "cors";
import env from "dotenv";
import cookieParser from "cookie-parser";
import dbConnection from "./src/db/dbConnection.js";
import routes from  "./src/routes/routes.js";

env.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

dbConnection();

app.use("/api",routes);

app.listen(PORT,()=>{
    console.log(`Server is runnig on http://localhost:${PORT}`);
});
