const express = require('express');

const  dbConnect = require('./src/db/dbConncection');

const employeeRouting = require('./src/routes/employeeRoutes');

const app = express();

app.use(express.json());

app.use("/api",employeeRouting);

const PORT = 3000;


app.listen(PORT,()=>{
    dbConnect();
    console.log(`Server is running in http://localhost:${PORT}`);
});