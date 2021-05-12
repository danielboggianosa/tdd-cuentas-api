module.exports = function setupEmpresa({ EmpresaModel }){
    const getAll = async (query) => EmpresaModel.read.getAll(query)

    return {
        getAll
    }
}