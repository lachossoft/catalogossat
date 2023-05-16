/*
    Modelo Método de Pago
    
    Modelo para el método de pago
*/

const { Schema, model } = require('mongoose');

const MetodoPagoSchema = Schema({
    c_MetodoPago: {
        type: String,
        required: true,
        unique: true
    },
    Descripcion: {
        type: String,
        required: true,
        unique: false
    }
}, {
    collection: 'catMetodoPago'
});

MetodoPagoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('MetodoPago', MetodoPagoSchema);
