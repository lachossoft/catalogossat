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

        // Validar la existencia del campo regimenFiscal
        const Regimenexists = await ThereIs(regimenFiscal, RegimenFiscal, 'c_RegimenFiscal');

        if (!Regimenexists) {
            return res.status(404).send({
                status: 'Error',
                message: 'El regimenFiscal no existe'
            });
        }
        const usocfdi = await UsoCFDI.findOne({ c_UsoCFDI });

        if (!usocfdi) {
            return res.status(404).send({
                status: 'Error',
                message: 'No se encontró el registro de usocfdi solicitado'
            });
        }

        // Buscar los registros en catRegimenSat que coincidan con PersonaMoral
        const regimenFiscalesPersonaMoral = await RegimenFiscal.find({ Moral:PersonaMoral });

        // Obtener los códigos de régimen fiscal del campo RegimenFiscalReceptor
        const codigosRegimenFiscal = usocfdi.RegimenFiscalReceptor.split(',').map((codigo) => codigo.trim());

        // Filtrar los registros de catRegimenSat que coincidan con los códigos obtenidos y PersonaMoral
        const regimenFiscales = regimenFiscalesPersonaMoral.filter((regimen) => codigosRegimenFiscal.includes(regimen.c_RegimenFiscal));

        return res.status(200).send({
            status: 'Ok',
            message: 'Se encontró el registro de usocfdi solicitado',
            data: {
                c_UsoCFDI: usocfdi.c_UsoCFDI,
                Descripcion: usocfdi.Descripcion,
                regimenFiscal: regimenFiscales.map((regimen) => regimen.c_RegimenFiscal)
            }
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