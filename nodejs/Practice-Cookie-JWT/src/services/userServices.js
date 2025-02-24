import dbConnection from "../db/dbConnection.js";
import user from "../models/userModel.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
export const registerService = async (userData) => {
    try {
        await dbConnection();
        const {userName,email,password} = userData;
        const check = await userModel.findOne({email:email});
        if(check){
            return "User Already Exists";
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await userModel.create({userName,email,password:hashedPassword});
            return user;
        }
    }
    catch (e) {
        throw new Error(e);
    }
};



export const loginService = async (email,password) => {
    try{
        const emailId = email;
        const userPassword = password;

        const user = await userModel.findOne({email:emailId});

        if(user){
            const checkPassword = await bcrypt.compare(userPassword,user.password);
            console.log(checkPassword);
            if(checkPassword){
                return user;
            }
            else{
                return "Invail Credentials";
            }
        }
        else{
            return "User not found";
        }

    }
    catch (e) {
        throw new Error(e);
    }
}


export const profileService = async (userId) =>{
    try{
        const userDetails = await userModel.findOne({_id:userId});
        if(userDetails){
            return userDetails;
        }
        else{
            return "Unauthorized Access";
        }
    }
    catch (e) {
        throw new Error(e);
    }
}
