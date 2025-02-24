const express = require('express');
const { put } = require('./usersRoute');

const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
    res.json({
        message:"Update a Single User"
    });
});

userRouter.route("/:id").get((req,res)=>{
    res.json({
        message:"Update a Single User"
    });
}).put((req,res)=>{
    res.json({
        message:"Update a Single User"
    });
}).delete((req,res)=>{
    res.json({
        message:"Delete a Single User"
    });
});



module.exports = userRouter;