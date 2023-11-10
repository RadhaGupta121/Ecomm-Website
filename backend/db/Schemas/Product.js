const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,enum:['Electronics','Fashion','Books']}

})
module.exports.Product= mongoose.model('Product',ProductSchema);