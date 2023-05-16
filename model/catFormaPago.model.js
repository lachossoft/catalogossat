/*
    Modelo Forma de Pago
    
    Modelo para la forma de pago
*/

const { Schema, model } = require('mongoose');

const FormaPagoSchema = Schema({
    c_FormaPago: {
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
    collection: 'catFormaPago'
});

FormaPagoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('FormaPago', FormaPagoSchema);
