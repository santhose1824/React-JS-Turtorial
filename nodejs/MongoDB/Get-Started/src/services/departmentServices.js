const dbConnection = require('../db/dbConnection');


const createDepartmentServices = async (departmentData) => {
    try {
        const db = await dbConnection();
        const departments = db.collection('Departments');
        const addDepartment = departments.insertOne(departmentData);
        return addDepartment;
    }
    catch (e) {
        console.log(`Error on Adding the Departmet Data : ${e}`);
    }
};


const getDepartmentServices = async () => {
    try {
        const db = await dbConnection();
        const getAllDepartments = db.collection("Departments");
        const resultCursor = getAllDepartments.find();
        const result = resultCursor.toArray();
        console.log(result);
        return result;
    }
    catch (e) {
        console.log(`Error on fetching all the Departments : ${e}`);
    }
};

const getSingleDepartmentServices = async (data) => {
    try {
        const db = await dbConnection();
        const getAllDepartments = db.collection("Departments");
        const result = await getAllDepartments.findOne(data);
        console.log(result);
        return result;
    }
    catch (e) {
        console.log(`Error on fetching all the Departments : ${e}`);
    }
};

const updateSingleDepartmentServices = async (filterData, dataNeedsToChange) => {
    try {
        const db = await dbConnection();
        const updateDepartment = db.collection('Departments');

        // Use await to correctly wait for the update operation
        const result = await updateDepartment.updateOne(
            filterData,
            { $set: dataNeedsToChange }
        );

        console.log("Update Result:", result);
        return result;
    } catch (e) {
        console.error(`Error on Updating Data: ${e}`);
        throw e; // Rethrow the error so it can be caught by the controller
    }
};

const deleteSingleDepartmentServices = async (data) =>{
    try {
        const db = await dbConnection();
        const deleteDepartment = db.collection("Departments");
        const result = deleteDepartment.deleteOne(data);
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = { createDepartmentServices, getDepartmentServices, getSingleDepartmentServices, updateSingleDepartmentServices,deleteSingleDepartmentServices };