const express=require('express');
const app=express();
app.get('/view/?id',(req,res)=>{
    res.send("This is working");
    console.log("working");
})
app.listen(5000);

const viewDetail={
    
}
