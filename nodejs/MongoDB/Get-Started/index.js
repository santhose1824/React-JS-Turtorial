const express = require ('express');
const dbConnection = require('./src/db/dbConnection');
const departmentRoutes = require('./src/routes/departmentRouter');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/api", departmentRoutes);

app.listen(PORT,()=>{
    dbConnection();
    console.log(`Server is running on the http://localhost:${PORT}`);
});