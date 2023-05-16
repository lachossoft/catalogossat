/*
    Modelo UsoCFDI
    
    Modelo para el uso de CFDI
*/

const { Schema, model } = require('mongoose');

const UsoCFDISchema = Schema({
    c_UsoCFDI: {
        type: String,
        required: true,
        unique: true
    },
    Descripcion: {
        type: String,
        required: true,
        unique: false
    },
    PersonaFisica: {
        type: String,
        required: true,
        unique: false
    },
    PersonaMoral: {
        type: String,
        required: true,
        unique: false
    },
    RegimenFiscalReceptor: {
        type: String,
        required: true,
        unique: false
    }
}, {
    collection: 'catUsoCFDI'
});

UsoCFDISchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('UsoCFDI', UsoCFDISchema);
