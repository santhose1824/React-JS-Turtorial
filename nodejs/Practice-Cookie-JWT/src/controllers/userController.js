import {registerService,loginService,profileService} from "../services/userServices.js";
import jwt from "jsonwebtoken";
export const registerController  = async (req,res) => {
    try{
        const userData = req.body;
        const newUser = await registerService(userData);
        if(newUser === "User Already Exists"){
            res.status(401).json({
                message:"The User is already exists ,Try new Email"
            });
        }
        else{
            res.status(201).json({
                message:"New User Added Successfully",
                data:newUser
            });
        }
    }
    catch (e) {
        throw new Error(e);
    }
};

export const loginController = async (req, res) => {
    try {
        const emailId = req.body.email;
        const userPassword = req.body.password;

        const loginUser = await loginService(emailId, userPassword);
        console.log(loginUser);

        if (loginUser === "Invail Credentials") {
            return res.status(400).json({
                message: "Invalid Credentials, Check Email Id or Password"
            });
        } else if (loginUser === "User not found") {
            return res.status(404).json({
                message: "User with this email id is not found"
            });
        } else {
            const userId = loginUser.id;
            const token = jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.COOKIE_SECURE === 'true',
                sameSite: 'strict',
                maxAge: 3600000 // 1 hour
            });

            return res.status(200).json({
                message: "Logged In Successfully"
            });
        }
    } catch (e) {
        console.error("Error in loginController:", e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const profileController = async (req,res) =>{
    try{
        const token = req.cookies.token;
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        const userDetails = await profileService(decoded.id);
        if(userDetails === "Unauthorized Access"){
            res.status(404).json({
                message:"Unauthorized Access"
            });
        }
        else{
            res.status(200).json({
                message:"User Details get SUccessfully",
                data:userDetails
            });
        }
    }
    catch(e){
        res.status(500).json({ message: "Internal Server Error" });
        throw new Error(e);
    }
}

export const logoutController = async (req,res) =>{
    try{
        await res.clearCookie('token');
        res.status(200).json({
            message:"Logged Out Successfully"
        });
    }
    catch(e){
        res.status(500).json({
            mesaage:"Internal Server Error"
        });
    }
}