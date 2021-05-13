module.exports = function setupEmpresa({ EmpresaModel }){
    const getAll = async (query) => EmpresaModel.read.getAll(query)
    const getById = async (params, query) => EmpresaModel.read.getById(params, query)

    return {
        getAll,
        getById
    }
}