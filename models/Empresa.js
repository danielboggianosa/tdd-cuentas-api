const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupEmpresaModel({ config }) {
    const readingSequelize = setupDatabase(config.read)
    const executeSequelize = setupDatabase(config.execute)
    const TABLE_ALIAS = 'empresa'
    const TABLE = 'cu_empresas'

    const bodyModel = {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: Sequelize.STRING(100),
        },
        notas: {
            type: Sequelize.TEXT
        },
        imagen: {
            type: Sequelize.TEXT
        }
    }

    const read = readingSequelize.define(TABLE_ALIAS, bodyModel, { tableName: TABLE })
    const execute = executeSequelize.define(TABLE_ALIAS, bodyModel, { tableName: TABLE })
    
    read.getAll = query => {
        return read.findAll()
    }

    return { read, execute }
}