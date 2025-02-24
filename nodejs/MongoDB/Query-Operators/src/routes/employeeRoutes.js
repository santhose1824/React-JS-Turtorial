const createEmployeeController = require('../controllers/createEmployeeController');
const fetchEmployeeController = require('../controllers/fetchEmployeeController');

const express = require('express');

const router = express.Router();

router.post("/employees",createEmployeeController.createEmployeeController);
router.get("/employees",fetchEmployeeController.fetchEmployeeController);


module.exports = router;

