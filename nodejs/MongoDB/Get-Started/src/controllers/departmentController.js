const departmentServices =  require('../services/departmentServices');


const createDepartmentController = async (req,res)=>{
    try {
        const getDepartment = await departmentServices.createDepartmentServices(req.body);
        res.status(201).json({"message":"Department Added Successfully",getDepartment});
    }
    catch (e) {
        res.status(501).json({"message":e.message});
    }
};

const getDepartmentController  = async (req,res) => {
    try {
        const fetchAllDepartments =await departmentServices.getDepartmentServices();
        res.status(201).json({
            message:"All the Departments are fetched Successfully",
            data:fetchAllDepartments
        });
    }
    catch (e) {
        res.status(501).body({"message":e.message});
    }
};


const getSingleDepartmentController  = async (req,res) => {
    try {
        const fetchSingleDepartments = await departmentServices.getSingleDepartmentServices(req.body);
        res.status(201).json({
            message:"All the Departments are fetched Successfully",
            data:fetchSingleDepartments
        });
    }
    catch (e) {
        res.status(501).body({"message":e.message});
    }
};

const updateSingleDepartmentController = async (req, res) => {
    try {
        const filterData = {
            departmentName: req.params.departmentName
        };
        const dataNeedsToChange = req.body;

        // Call the correct service function with await
        const updateResult = await departmentServices.updateSingleDepartmentServices(filterData, dataNeedsToChange);

        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({
                message: "Department not found or no changes made"
            });
        }

        return res.status(200).json({
            message: "Department updated successfully",
            data: dataNeedsToChange,
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
};

const deleteDepartmentController = async (req, res)=> {
    const deletedData =  {
        departmentName:req.params.departmentName
    };
    const deleteDepartment = await departmentServices.deleteSingleDepartmentServices(deletedData);
    res.status(200).json({
        messgae:"Data Deleted Successfully",
        deleteDepartment
    })
}


module.exports = {createDepartmentController,getDepartmentController,getSingleDepartmentController,updateSingleDepartmentController,deleteDepartmentController};