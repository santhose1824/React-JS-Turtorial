const dbConnection =  require('../db/dbConnection');
const User = require('../models/userModel');

const createUserServices = async (userData)=>{
    try{
        const user = await User.findOne({email:userData.email});
        if(!user){
            const insertUser = await User.create(userData);
            return insertUser;
        }
        else{
            const result = "User is already exists";
            return result;
        }
    }
    catch(e){
        throw new Error(e);
    }
};


const fetchUserDetails = async (userId) =>{
    try{
        const user = await User.findById(userId);
        console.log("The user is ",user);
        return user;
    }
    catch(e){
        throw new Error(e);
    }
};


module.exports = {createUserServices,fetchUserDetails};