const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_FILE
})

try {
  sequelize.authenticate();
  console.log('Connection on SQlite3');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


module.exports = sequelize