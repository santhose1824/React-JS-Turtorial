const express = require('express');


const postRouter = express.Router();


postRouter.get("/",(req,res)=>{
    res.json({
        message:"Get All the Posts"
    });
});


postRouter.get("/singlePost/:id",(req,res)=>{
    res.json({
        message:"Get a single Post"
    });
});


postRouter.post("/create",(req,res)=>{
    const request = req.body;
    res.json({
        message:"Post Created Successfully"
    });
});


postRouter.put("/update/:id",(req,res)=>{
    res.json({
        message:"Update the post"
    });
});


postRouter.delete("/delete/:id",(req,res)=>{
    res.json({
        message:"Delete the post"
    });
});

module.exports = postRouter;