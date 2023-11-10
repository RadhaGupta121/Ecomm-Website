const express=require('express');
const route=express.Router();
const product=require('../API/products_api.js');
const order=require('../API/order_api.js');
const {user}=require('../API/user_api.js');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
route.get('/product',(req,res)=>{
    res.send(product);
})
route.get('/order',(req,res)=>{
    res.send(order);
})
route.get('/user',(req,res)=>{
    res.send(user);
})
route.post('/addUser',(req,res)=>{
    console.log(req.body);
    res.send("Accepted");
})



module.exports=route;