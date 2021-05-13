module.exports = async (req, res, next) => {
    try{
        const { Empresa } = req._services
        const data = await Empresa.getById(req.params, req.query)
        return res.status(200).json({ success:true, data })
    } catch (e) {
        return res.status(500).json({success: false, message: e})
    }
}