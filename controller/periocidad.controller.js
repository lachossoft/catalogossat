const Periodicidad = require('../model/catPeriocidad.model');

const getAllPeriodicidad = async (req, res) => {
    try {
        const periodicidadList = await Periodicidad.find();
        
        return res.status(200).send({
            status: 'Ok',
            message: 'Se han localizado las periocidades',
            periodicidadList
        });
    } catch (error) {
        return res.status(500).send({
            status: 'Error',
            message: error.message
        });
    }
};

module.exports = {
    getAllPeriodicidad
};
