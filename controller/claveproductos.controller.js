
const ClaveProductos = require('../model/catClaveProductos.model')

const getClavesProductos = async (req, res) => {
    const { searchClave } = req.body;

    try {
        const clavesProductos = await ClaveProductos.find({ $or: [ { c_ClaveProdServ: { $regex: new RegExp(searchClave, 'i') } },{ Descripcion: { $regex: new RegExp(searchClave, 'i') } }, { PalabrasClave: { $regex: new RegExp(searchClave, 'i') } } ] });
          

        if (clavesProductos.length === 0) {
            return res.status(404).send({
                status: 'Error',
                message: 'No se encontraron claves de productos'
            });
        }
        if (searchClave === '') { 
            return res.status(404).send({
                status: 'Error',
                message: 'No se encontraron claves de productos'
            });
        }
        return res.status(200).send({
            status: 'Ok',
            message: 'Se encontraron claves de productos',
            clavesProductos
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 'Error',
            message: error
        });
    }
};


module.exports = {
    getClavesProductos,
};
