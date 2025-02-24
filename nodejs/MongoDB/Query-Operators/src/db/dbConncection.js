const {MongoClient,ServerApiVersion} =  require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/',{
    serverAPi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
});

let db;

const connectDB = async () =>{
    try{
        await client.connect();
        db = await client.db("Employees");
        console.log(`Mongo DB connected to ${db}`);
        return db;
    }
    catch(e) {
        console.log(`Error on Connecting with database : ${e}`);
    }
}


module.exports =  connectDB;
