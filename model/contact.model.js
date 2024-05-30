const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");
const Contact = sequelize.define(
  "Contact",
  {
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    linkedId: DataTypes.INTEGER,
    linkPrecedence: DataTypes.STRING,
  },
  {
    paranoid: true,
    timestamps: true,
    tableName: "contacts",
  }
);

module.exports = Contact;
