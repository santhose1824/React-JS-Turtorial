const dbConnection = require('../db/dbConncection');


const createEmployeeServices = async (employees) =>{
    try {
        const db = await dbConnection();
        const employeesCollection = await db.collection('EmployeeDetails');
        const result = await employeesCollection.insertMany(employees);
        console.log("Employee Details Insertes Successfully");
        return result;
    }
    catch (e) {
        console.log(`Error on Inserting Employee Details : ${e}`);
        return e;
    }
};

module.exports = {createEmployeeServices};