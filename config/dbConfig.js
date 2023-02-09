const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('data_bar','root',null,{ 
  host:'localhost', 
  dialect:'mysql' 
});
module.exports = sequelize;