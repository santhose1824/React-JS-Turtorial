const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();


router.post("/users",userController.createUserController);
router.get("/users/:id",userController.fetchUserController)


module.exports = router;