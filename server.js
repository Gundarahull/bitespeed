const express=require('express');
const sequelize = require('./database/db');
const app=express()

//body-parsing
app.use(express.json())
app.use(express.urlencoded(true))


//routes
const contactRoutes=require('./routes/contact.routes')
app.use(contactRoutes)

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