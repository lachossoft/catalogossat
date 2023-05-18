const CodigoPostal = require('../model/catCodigoPostal.model');
const { ThereIs } = require('../helpers/validationcontrollers.helper');
const Estado = require('../model/catEstado.model');
const Municipio = require('../model/catMunicipio.model');
const Localidad = require('../model/catLocalidad.model');
const Pais = require('../model/catPais.model');
const Colonia = require('../model/catColonia.model');

const getCodigoPostal = async (req, res) => {
    const { codigoPostal } = req.params;

    try {
        // Buscar el código postal en la base de datos
        const codigoPostalEncontrado = await CodigoPostal.findOne({ c_CodigoPostal: codigoPostal });

        if (!codigoPostalEncontrado) {
            return res.status(404).json({
                status: 'Error',
                message: 'No se encontró el código postal solicitado',
            });
        }

        // Validar la existencia de c_Estado en el modelo de Estado
        const estadoExists = await ThereIs(codigoPostalEncontrado.c_Estado, Estado, 'c_Estado');

        if (!estadoExists) {
            return res.status(404).json({
                status: 'Error',
                message: 'El estado no existe',
            });
        }

        // Obtener el campo c_Pais del modelo Estado
        const estado = await Estado.findOne({ c_Estado: codigoPostalEncontrado.c_Estado });
        const c_PaisEstado = estado.c_Pais;
        const c_EstadoNombre = estado.NombreEstado;

        // Validar la existencia de c_PaisEstado en el modelo de Pais
        const paisExists = await ThereIs(c_PaisEstado, Pais, 'c_Pais');

        if (!paisExists) {
            return res.status(404).json({
                status: 'Error',
                message: 'El país no existe',
            });
        }

        // Obtener la descripción del país
        const pais = await Pais.findOne({ c_Pais: c_PaisEstado });
        const c_PaisNombre = pais.Descripcion;

        // Validar la existencia de c_Municipio en el modelo de Municipio
        if (codigoPostalEncontrado.c_Municipio != "") {
            const municipioExists = await ThereIs(codigoPostalEncontrado.c_Municipio, Municipio, 'c_Municipio');

            if (!municipioExists) {
                return res.status(404).json({
                    status: 'Error',
                    message: 'El municipio no existe',
                });
            }
        } else {
            return res.status(404).json({
                status: 'Error',
                message: 'El codigo postal no cuenta con un codigo de municipio para buscar',
                codigo: codigoPostalEncontrado.c_Municipio
            });
        }

        // Validar la existencia de c_Localidad en el modelo de Localidad
        const localidadExists = await ThereIs(codigoPostalEncontrado.c_Localidad, Localidad, 'c_Localidad');

        if (!localidadExists) {
            return res.status(404).json({
                status: 'Error',
                message: 'La localidad no existe',
            });
        }

        const [colonias, municipio, localidad] = await Promise.all([
            Colonia.find({ c_CodigoPostal: codigoPostalEncontrado.c_CodigoPostal }),
            Municipio.findOne({ c_Municipio: codigoPostalEncontrado.c_Municipio,c_Estado: codigoPostalEncontrado.c_Estado}),
            Localidad.findOne({ c_Localidad: codigoPostalEncontrado.c_Localidad,c_Estado: codigoPostalEncontrado.c_Estado }),
        ]);
        const allcolonias = [];
        for (const coloniaitem of colonias) {
                allcolonias.push({
                    Colonia: coloniaitem.NombreAsentamiento
                });
        }
        return res.status(200).json({
            status: 'Ok',
            message: 'Código postal encontrado',
            data: {
                CodigoPostal: codigoPostalEncontrado.c_CodigoPostal,
                EstimuloFranjaFronteriza: codigoPostalEncontrado.EstimuloFranjaFronteriza,
                Pais:c_PaisNombre,
                Estado: codigoPostalEncontrado.c_Estado,
                Estado:c_EstadoNombre,
                Municipio:municipio.Descripcion,
                Localidad:localidad.Descripcion,
                allcolonias,
                
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: 'Error',
            message: 'Ha ocurrido un error en el servidor',
            error: error.message,
        });
    }
};

module.exports = {
    getCodigoPostal,
};
