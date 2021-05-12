module.exports = async (req, res, next) => {
    try{
        const { Empresa } = req._services
        const data = await Empresa.getAll(req.query)
        return res.status(200).json({success: true, data})
    } catch (e) {
        return res.status(501n).json({success:false})
    }
}