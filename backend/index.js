const express=require('express');
const {dbConnection}=require('./db/db_connection.js');
const route=require('./routers/route.js');
const app=express();

dbConnection()
.then(()=>{
    app.use('/',route);
    app.listen(8000,()=>{
        console.log("connected with the server!");
    });
})



