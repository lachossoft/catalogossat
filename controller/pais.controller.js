const Pais = require('../model/catPais.model');

const getAllPaises = async (req, res) => {
  try {
    const paises = await Pais.find();

    if (!paises) {
      return res.status(404).json({
        status: 'Error',
        message: 'No se encontraron países',
      });
    }

    return res.status(200).json({
      status: 'Ok',
      message: 'Países encontrados',
      data: paises,
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
  getAllPaises,
};
