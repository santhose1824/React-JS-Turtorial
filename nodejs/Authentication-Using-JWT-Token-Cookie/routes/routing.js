import {registerUserController,loginUserController,fetchUserDetailsController,logout} from '../controllers/userController.js';

import express from "express";

const route = express.Router();

route.post("/register",registerUserController);
route.post("/login",loginUserController);
route.get("/profile",fetchUserDetailsController);
route.post("/logout",logout);

export default route;