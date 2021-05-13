const Sequelize = require('sequelize')
const sequelizes = {}

module.exports = function setupDatabase (config) {
  if (!config) {
    throw new Error('Failed db connexion')
  }
  const key = `${config.host}-${config.database}-${config.port}-${config.username}-${config.password}-${config.dialect}`
  let sequelize = sequelizes[key]

  if (!sequelize) {
    sequelize = new Sequelize(config)
    sequelizes[key] = sequelize
  }
  return sequelize
}