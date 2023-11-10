const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        email:String,
        phoneNumber:String,
        age:Number,
        gender:String
    }
)
module.exports.User=mongoose.model('User',UserSchema);