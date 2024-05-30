const { Sequelize } = require("sequelize");
const sequelize= new Sequelize('bitespeed','root','rabiya',{
    dialect:"mysql",
    host:"localhost"
})

module.exports= sequelize