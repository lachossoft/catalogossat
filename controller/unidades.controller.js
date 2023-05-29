const Unidad = require('../model/catUnidades.model');

// Obtener todas las unidades
const getAllUnidades = async (req, res) => {
  try {
    const unidades = await Unidad.find();
    res.status(200).json({
      status: 'Ok',
      message: 'Unidades encontradas',
      data: unidades,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: 'Error al obtener las unidades',
      error: error.message,
    });
  }
};

// Obtener una unidad por c_ClaveUnidad
const getUnidadByClave = async (req, res) => {
  const { c_ClaveUnidad } = req.params;

  try {
    const unidad = await Unidad.findOne({ c_ClaveUnidad });

    if (!unidad) {
      return res.status(404).json({
        status: 'Error',
        message: 'No se encontró la unidad solicitada',
      });
    }

    res.status(200).json({
      status: 'Ok',
      message: 'Unidad encontrada',
      data: unidad,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: 'Error al obtener la unidad',
      error: error.message,
    });
  }
};

module.exports = {
  getAllUnidades,
  getUnidadByClave,
};
