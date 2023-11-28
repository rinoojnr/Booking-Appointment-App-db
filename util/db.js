const Sequelize = require('sequelize');


const sequelize = new Sequelize('user','root','Amma007#',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;