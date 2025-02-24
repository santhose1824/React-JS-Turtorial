//  Import express package

const express = require("express");

const app = express();

const PORT = 8082;

app.get("/",(req,res)=>{
    res.send("Hello World")
});


app.listen(PORT,()=>{
    console.log(`The Express Application is running on http://localhost:${PORT}`);
});

