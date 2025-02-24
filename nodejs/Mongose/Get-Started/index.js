const express = require('express');

const dbConnection  = require('./src/db/dbConnection');

const routes = require('./src/routes/routes');

const app = express();

app.use(express.json());

app.use("/api",routes);

const PORT  = 3000;

app.listen(PORT,()=>{
    dbConnection();
    console.log(`Server is running on the ${PORT}`);
});