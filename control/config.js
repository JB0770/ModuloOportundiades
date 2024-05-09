const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jorda\_dbaoportunidades', 'jorda', 'LuzMar071', {
  host: 'postgresql-jorda.alwaysdata.net',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

module.exports = sequelize;