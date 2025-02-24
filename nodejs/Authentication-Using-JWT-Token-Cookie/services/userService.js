import dbConnection from "../db/dbConnection.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const registerUserService = async (userData) => {
    try {
        await dbConnection();
        const userEmail = await userModel.findOne({email: userData.email});
        if(userEmail){
            let result = "User already Exists";
            return result;
        }
        else{
            const{userName,email,password} = userData;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await userModel.create({
                userName: userName,
                email: email,
                password: hashedPassword,
            });
            return user;
        }
    }

    catch (e) {
        throw new Error(e);
    }
};


export const loginUserService = async (email,password) => {
    try {
        const user = await userModel.findOne({email: email});
        if(!user) return "User not found";
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            return user;
        }
        else{
            return "Invalid Credientails";
        }
    }
    catch (e) {
        throw new Error(e);
    }
};

export const fetchUserDetails = async(userId)=>{
    try {
        const userDetails = await userModel.findOne({_id: userId});
        if(!userDetails) return "Unauthorized";
        return userDetails;
    }
    catch (e) {
        throw new Error(e);
    }
};