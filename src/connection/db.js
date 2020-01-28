const Sequelize = require('sequelize');
const Mongoose  = require('mongoose');
const Redis = require('redis').createClient('redis://0.0.0.0');
const dbpsql = new Sequelize('postgres://edusatelis:448171@localhost:5432/api');
const dbmongo = Mongoose.connection.openUri('mongodb://localhost:27017/db_Os');


module.exports = { 
    dbpsql: dbpsql, 
    Sequelize: Sequelize,
    dbmongo,
    Redis
}