const UsoCFDI = require('../model/catUsoCFDI.model');
const RegimenFiscal = require('../model/catRegimenSAT.model');
const { ThereIs } = require('../helpers/validationcontrollers.helper');

const getAllUsoCFDI = async (req, res) => {
    const { c_UsoCFDI, PersonaMoral, regimenFiscal } = req.params;

    try {
        // Validar la existencia del campo c_UsoCFDI
        const CFDIexists = await ThereIs(c_UsoCFDI, UsoCFDI, 'c_UsoCFDI');

        if (!CFDIexists) {
            return res.status(404).send({
                status: 'Error',
                message: 'El c_UsoCFDI no existe'
            });
        }
        const Regimenexists = await ThereIs(regimenFiscal, RegimenFiscal, 'c_RegimenFiscal');

        if (!Regimenexists) {
            return res.status(404).send({
                status: 'Error',
                message: 'El regimenFiscal no existe'
            });
        }
       
        return res.status(200).send({
            status: 'Ok',
            message: 'Se encontraron los registros de RegimenFiscal',
            regimenFiscales
        });
    } catch (error) {
        return res.status(500).send({
            status: 'Error',
            message: error.message
        });
    }
};

module.exports = {
    getAllUsoCFDI
};
