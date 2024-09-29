const { Sequelize } = require('sequelize');

// Database setup (SQLite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = sequelize;
