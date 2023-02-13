const {Sequelize} = require('sequelize')

const db = new Sequelize('dans_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;