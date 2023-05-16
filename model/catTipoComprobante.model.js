/*
    Modelo Tipo de Comprobante
    
    Modelo para el tipo de comprobante
*/

const { Schema, model } = require('mongoose');

const TipoComprobanteSchema = Schema({
    c_TipoDeComprobante: {
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
    collection: 'catTipoComprobante'
});

TipoComprobanteSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('TipoComprobante', TipoComprobanteSchema);
