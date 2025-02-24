const express = require('express');

const userRouter = express.Router();

//! Get All the Users
userRouter.get("/",(req, res) => {
    res.json({
        message:"Update a Single User"
    });
});

//! Get Single Users
userRouter.get("/:id",(req,res)=>{
    res.json({
        message:"Update a Single User"
    });
});

//! Update Single Users
userRouter.put("/:id",(req,res)=>{
    res.json({
        message:"Update a Single User"
    });
});

//! Delete Single Users
userRouter.delete("/:id",(req,res)=>{
    res.json({
        message:"Delete a Single User"
    });
});


module.exports = userRouter;