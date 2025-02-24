const mongoose = require('mongoose');


const connectToDB = async () =>{
    try {
        const client = await mongoose.connect('mongodb://localhost:27017/ProfileDetails');
        console.log("Mongo DB is connected Successfully");
        return client;
    }
    catch (e) {
        console.log(`Mongo DB is not Connected due to : ${e}`);
    }
};

module.exports = connectToDB;