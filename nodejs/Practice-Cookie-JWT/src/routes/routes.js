import express from "express";
import {registerController,loginController,profileController,logoutController} from "../controllers/userController.js"
const route = express.Router();

route.post("/register",registerController);
route.post("/login",loginController);
route.get("/profile",profileController);
route.post("/logout",logoutController)

export default route;