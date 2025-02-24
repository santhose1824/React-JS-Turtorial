const creatEmployeeServices = require('../services/createEmployeeServices');

const createEmployeeController = async (req,res) =>{
    try {
        const employeeData = req.body;
        const insertEmployees = await creatEmployeeServices.createEmployeeServices(employeeData);
        res.status(201).json({
            message:"Employee Details are inserted Successfully",
            insertEmployees
        });
    }
    catch (e) {
        res.status(501).json({
            message:"Internal Server Error",
        });
    }
};

module.exports = {createEmployeeController};