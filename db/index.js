const setupDatabase = require('../lib/db')

const setupEmpresaModel = require('../models/Empresa')
const setupEmpresa = require('../lib/Empresa')

module.exports = async function (args) {
    // DEFAULT CONNECTION
    const executingConfig = {
        ...args
    }
    const readingConfig = {
        ...args,
    }

    const config = { read: readingConfig, execute: executingConfig}
    const readingSequelize = setupDatabase(config.read)
    const executeSequelize = setupDatabase(config.execute)

    /****************/
    // LOADING MODELS
    const EmpresaModel = setupEmpresaModel({ config })

    /*******************/
    // LOGADING SERVICES
    const Empresa = setupEmpresa({ EmpresaModel })

    return {
        Empresa
    }
}