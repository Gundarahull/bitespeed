const express=require('express');
const sequelize = require('./database/db');
const app=express()


sequelize.authenticate().then(()=>{
    console.log("Connection Done with MySql Database");
}).catch(()=>{
    console.log("Error While Connecting to DB");
})

sequelize.sync().then(()=>{
    console.log("Table Created");
}).catch(()=>{
    console.log("Error while Creating TABLES");
})

app.listen(9000,()=>{
    console.log("Server Startes");
})