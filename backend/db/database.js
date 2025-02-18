
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('portfolio', 'Wayne', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate()
.then(() => {
    console.log('Database Connection Established')
})
.catch((err) => {
    console.error('Error connecting to database', err)
})

module.exports = sequelize