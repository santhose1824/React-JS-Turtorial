const { createSearchIndex } = require('../models/userModel');
const userService = require ('../services/userServices');

const createUserController = async (req,res) =>{
    try{
        const userData = req.body;
        const user = await userService.createUserServices(userData);
        res.status(201).json({
            message:"User Created Successfully",
            data:user,
        });
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            message:"User is not Created Successfully",
        });
    }
};


const fetchUserController = async (req,res) =>{
    try{
        const userId = req.params.id;
        console.log(userId);
        const fetchUser = await userService.fetchUserDetails(userId);
        res.status(200).json({
            messgae:"User Details fetched Successfully",
            data: fetchUser,
        });
    }
    catch(e){
        res.status(500).json({
            message:"Can't able to find the User Details"
        });
    }
};

module.exports = {createUserController,fetchUserController};