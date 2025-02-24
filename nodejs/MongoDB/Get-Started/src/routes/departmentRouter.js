const express = require('express');

const route = express.Router();

const departmentController = require('../controllers/departmentController');


route.post("/departments",departmentController.createDepartmentController);
route.get("/departments",departmentController.getDepartmentController);
route.get("/departments/:departmentName",departmentController.getSingleDepartmentController);
route.put("/departments/:departmentName", departmentController.updateSingleDepartmentController);
route.delete("/departments/:departmentName", departmentController.deleteDepartmentController);




module.exports = route;