import mongoose from "mongoose";

const connectDB = ()=>{
    try{
        const db = mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongo DB is connected Successfully");
        return db;
    }
    catch(e){
        console.error(e);
        throw new Error(e);
    }
};

export default connectDB;