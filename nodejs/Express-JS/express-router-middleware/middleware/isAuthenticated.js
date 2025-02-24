// mimic Authentication

const isAuthenicated = (req,res,next)=>{
    const isLoggedIn = true;
    if(isLoggedIn){
        next();
    }
    else{
        res.json({
            message:"Unauthorized",
        });
    }
};


module.exports = isAuthenicated;