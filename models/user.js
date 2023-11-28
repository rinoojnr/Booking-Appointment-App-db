const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Data = sequelize.define('userLasts',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        allowNull: false,
        type:Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone:{
        type:Sequelize.DOUBLE,
        allowNull: false,
        unique: true
    }
});

module.exports = Data;