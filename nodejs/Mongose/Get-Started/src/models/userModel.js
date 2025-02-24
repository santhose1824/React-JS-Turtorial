const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    userName:String,
    age:Number,
    birthDay:Date,
    email:String,
    isActive:Boolean,
    hobbies:[String],
    objectId:mongoose.SchemaTypes.ObjectId,
    address:{
        street:String,
        city:String,
        state:String,
        country:String,
        pinCode:Number
    },
    customData:mongoose.SchemaTypes.Mixed,
});

const userProfile = mongoose.model('Users',userProfileSchema);

module.exports =  userProfile;