const MetodoPago = require('../model/catMetodoPago.model');

const getAllMetodoPago = async (req, res) => {
    try {
        const metodoPagoList = await MetodoPago.find();
        
        return res.status(200).send({
            status: 'Ok',
            message: 'Se han localizado los registros de método de pago',
            metodoPagoList
        });
    } catch (error) {
        return res.status(500).send({
            status: 'Error',
            message: error.message
        });
    }
};

module.exports = {
    getAllMetodoPago
};
