const Sequelize = require('sequelize')
const db = require('./database')

const Team = db.define('team', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    seed: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    }
})

module.exports = Team
