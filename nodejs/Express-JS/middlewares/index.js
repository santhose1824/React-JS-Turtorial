const express = require("express");

const app = express();

//? Build In Middlewares

// For static files
// app.use(express.static(""));

//  For Url Access
// app.use(express.urlencoded());

app.use(express.json());


//? Custom user defined Middlware (or) Application level Middleware

app.get("/",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"Welcome to the books api",
    });
});



app.use((req, res, next) => {
    console.log(req.body);
    console.log("Am an Application level Middleware");
    next();
});



app.post("/books",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"Build In Middleware Example",
    });
});


const PORT = 5000;

app.listen(PORT, (err, port) => {
    console.log(`The Sever is running on http://localhost:${PORT}`);
})