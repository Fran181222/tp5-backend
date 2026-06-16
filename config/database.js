const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize('tp5-backend', 'postgres', 'Fran181222', {
host: 'localhost',
dialect: 'postgres',
logging: false, // Evita que llene la consola con logs de consultas SQL básicas
});

module.exports = sequelize;
