const dbConnection = require('../db/dbConncection');

const fetchEmployees = async () => {
    try {
        const db = await dbConnection();
        const getEmployees = await db.collection('EmployeeDetails');

        //!  Query Operator $gt
        // const employeeCursor = await getEmployees.find({
        //     salary: { $gt: 70000 }
        // });
        // const employees = await employeeCursor.toArray();

        //! Query Operator $gte
        // const employeeCursor = await getEmployees.find({
        //     salary: { $gte: 70000 }
        // });
        // const employees = await employeeCursor.toArray();

        //! Query operator $ne
        // const employeeCursor = await getEmployees.find({
        //     salary: { $ne: 70000 }
        // });
        // const employees = await employeeCursor.toArray();

        //! Query Operator $lt
        // const employeeCursor = await getEmployees.find({
        //     salary: { $lt: 70000 }
        // });
        // const employees = await employeeCursor.toArray();

        //! Query Operator $lte
        // const employeeCursor = await getEmployees.find({
        //     salary: { $lte: 70000 }
        // });
        // const employees = await employeeCursor.toArray();

        //! Query Operator $nin
        const employeeCursor = await getEmployees.find({
            salary: { $nin: [70000,72000,66000,78000,82000] }
        });
        const employees = await employeeCursor.toArray();

        return employees;
    }
    catch (e) {
        console.log(`Error on fetching Employee Details : ${e}`)
    }
};

module.exports = { fetchEmployees };