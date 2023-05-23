const UsoCFDI = require('../model/catUsoCFDI.model');
const RegimenFiscal = require('../model/catRegimenSAT.model');
const { ThereIs } = require('../helpers/validationcontrollers.helper');

const getAllUsoCFDI = async (req, res) => {
    const { PersonaMoral, regimenFiscal } = req.params;

    try {
        // Validar la existencia del campo regimenFiscal
        const Regimenexists = await ThereIs(regimenFiscal, RegimenFiscal, 'c_RegimenFiscal');

        if (!Regimenexists) {
            return res.status(404).send({
                status: 'Error',
                message: 'El regimen fiscal no existe'
            });
        }
        // Buscar los registros en UsoCFDI que coincidan con PersonaMoral
        const usocfdi = await UsoCFDI.find({});

        if (usocfdi.length === 0) {
            return res.status(404).send({
                status: 'Error',
                message: 'No se encontraron registros del cfdi solicitados'
            });
        }

        // Buscar los registros en catRegimenSat que coincidan con c_RegimenFiscal y PersonaMoral
        const regimenFiscales = await RegimenFiscal.find({ c_RegimenFiscal: regimenFiscal, Moral: PersonaMoral });

        if (regimenFiscales.length === 0) {
            return res.status(404).send({
                status: 'Error',
                message: 'Este regimen no aplica para la persona especificada'
            });
        }

        const filteredUsoCFDI = [];

        for (const usocfdiItem of usocfdi) {
            const codigosRegimenFiscal = usocfdiItem.RegimenFiscalReceptor.split(',').map((codigo) => codigo.trim());
            if (codigosRegimenFiscal.includes(regimenFiscal)) {
                filteredUsoCFDI.push({
                    c_UsoCFDI: usocfdiItem.c_UsoCFDI,
                    Descripcion: usocfdiItem.Descripcion
                });
            }
        }

        return res.status(200).send({
            status: 'Ok',
            message: 'Se encontraron los registros del cfdi solicitados',
            data: filteredUsoCFDI
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
