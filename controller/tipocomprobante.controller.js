const TipoComprobante = require('../model/catTipoComprobante.model');

const getAllTipoComprobante = async (req, res) => {
    try {
        const tipoComprobanteList = await TipoComprobante.find();
        
        return res.status(200).send({
            status: 'Ok',
            message: 'Se han localizado los tipos de comprobante',
            tipoComprobanteList
        });
    } catch (error) {
        return res.status(500).send({
            status: 'Error',
            message: error.message
        });
    }
};

module.exports = {
    getAllTipoComprobante
};