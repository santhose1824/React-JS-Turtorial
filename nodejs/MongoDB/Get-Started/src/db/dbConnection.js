const {MongoClient,ServerApiVersion}  = require('mongodb');


const client = new MongoClient('mongodb://localhost:27017/',{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    },
});

let db;

const connectDB = async()=>{
    try{
        await client.connect();
        db = client.db('School');
        console.log("Mongo DB is connected Successfully");
        return db;
    }
    catch(e){
        console.log(`Mongo DB is not connected due to : ${e}`);
    }
}


module.exports = connectDB;