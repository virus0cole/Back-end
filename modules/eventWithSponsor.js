sequelize = require('../database/sequelize')
const Sequelize = require('sequelize')

module.exports = sequelize.define('event_with_sponsor', {
  eventId: {
    field: "event_id",
    type: Sequelize.INTEGER,
    foreignKey: true,
    primaryKey: true
  },
  sponsorId: {
    field: 'sponsor_id',
    type: Sequelize.INTEGER,
    foreignKey: true,
    primaryKey: true
  }
}, {
  freezeTableName: true,
  timestamps: false
})