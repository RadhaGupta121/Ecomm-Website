const mongoose =require('mongoose');
module.exports.OrderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    product:[{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }],
    totalPrice:{type:Number ,default:0},
    
})