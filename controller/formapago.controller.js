const FormaPago = require('../model/catFormaPago.model');

const getAllFormaPago = async (req, res) => {
    try {
        const formaPagoList = await FormaPago.find();
        
        return res.status(200).send({
            status: 'Ok',
            message: 'Se han localizado las formas de pago',
            formaPagoList
        });
    } catch (error) {
        return res.status(500).send({
            status: 'Error',
            message: error.message
        });
    }
};

const getFormaPagoByCFormaPago = async (req, res) => {
    const { c_formaPago } = req.params;

    try {
        const formaPago = await FormaPago.findOne({ c_FormaPago: c_formaPago });

        if (!formaPago) {
            return res.status(404).send({
                status: 'Error',
                message: 'No se encontró la forma de pago solicitada'
            });
        }

        return res.status(200).send({
            status: 'Ok',
            message: 'Se encontró la forma de pago solicitada',
            formaPago
        });
    } catch (error) {
        return res.status(500).send({
            status: 'Error',
            message: error.message
        });
    }
};

module.exports = {
    getAllFormaPago,
    getFormaPagoByCFormaPago
};