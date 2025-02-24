const express = require('express');
const path = require('path');
const PORT = 3000;


const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views","home.html"));
});

app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views","about.html"));
});
app.get("/contact", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views","contact.html"));
});
app.get("/gallery", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views","gallery.html"));
});

app.listen(PORT, (req,res) => {
    console.log(`The server is running on the http://localhost:${PORT}`);
});