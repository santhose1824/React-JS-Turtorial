const fetchEmployeeService = require ('../services/fetchEmployeeServices');


const fetchEmployeeController = async (req,res) =>{
    try {
        const getEmployees = await fetchEmployeeService.fetchEmployees();
        res.status(200).json({
            message:"Employee Details Fetched Successfully",
            data:getEmployees
        })
    }
    catch (e) {
        res.status(500).json({
            message:"Internal Server Error",
        });
    }
};

module.exports = {fetchEmployeeController}