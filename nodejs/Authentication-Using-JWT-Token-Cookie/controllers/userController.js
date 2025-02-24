import {registerUserService,loginUserService,fetchUserDetails} from "../services/userService.js";
import jwt from "jsonwebtoken";
import env from "dotenv";
export const registerUserController = async (req, res) => {
    try {
        const userData = req.body;
        const createNewUser = await registerUserService(userData);
        if(createNewUser === "User already Exists"){
            res.status(401).json({
                message: "User Already Exists"
            });
        }
        else{
            res.status(201).json({
                message: "User Registered Successfully",
                data:userData
            });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message:"Internal Server Error"
        });
    }
};


export const loginUserController = async (req, res) => {
    try {
        const {email,password} = req.body;
        const loginUser = await loginUserService(email,password);
        if(loginUser === "User not found"){
            res.status(404).json({
                message: "User is not found , Please Register"
            });
        }
        else if(loginUser === "Invalid Credientails"){
            res.status(400).json({
                message: "Invaild Credientails,Please check email or password",
            });
        }
        else{
            const token = jwt.sign({id:loginUser._id},process.env.JWT_SECRET_KEY,{expiresIn:'1h'});
            res.cookie('token',token,{
                httpOnly:true,
                secure: process.env.COOKIE_SECURE === 'true',  // ✅ Properly converts string to boolean
                sameSite:'strict',
                maxAge:360000,
            });
            res.status(200).json({
                message:"User Login Successfully"
            });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message:e.message,
        });
    }
};

export const fetchUserDetailsController = async (req, res)=>{
    try {
        const token = req.cookies.token;
        if(!token) res.status(400).json({message:"Unauthorized Access"});
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const getUserDetails = await fetchUserDetails(decoded.id);
        res.status(200).json({
            message:"User Details are fetched successfully",
            data:getUserDetails
        });
    }
    catch (e) {
        res.status(500).json({
            message:e.message,
        });
        throw new Error(e);
    }
};

export const logout = async (req, res)=>{
    try{
        await res.clearCookie('token');
        res.status(200).json({
            message:"User Logout Successfully",
        });
    }
    catch (e) {
        throw new Error(e);
    }
}

