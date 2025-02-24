import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const db = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongo DB is connected Successfully");
        return db;
    }

    catch(e){
        throw new Error(e);
    }
};


export default connectDB;