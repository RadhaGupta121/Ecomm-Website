const mongoose =require('mongoose');
const {Product} =require('../db/Schemas/Product.js');
const products =require('../API/products_api.js');
module.exports.dbConnection=async()=>{
    
  await mongoose.connect('mongodb+srv://amiradhabhalo:amiradhabhalo@cluster0.uflv2ut.mongodb.net/ecommerce')
  .then(()=>console.log("connected!!"))
  .then(
   async ()=>{
    console.log(products);
    //  const productInstances = products.product.map(item => new Product(item));
       
        // await Product.insertMany(productInstances);
    //    await  Product.save();
         console.log("Saved!!");
    }
  )
}

