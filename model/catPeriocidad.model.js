/*
    Modelo Periodicidad
    
    Modelo para la periodicidad
*/

const { Schema, model } = require('mongoose');

const PeriodicidadSchema = Schema({
    c_Periodicidad: {
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
    collection: 'catPeriocidad'
});

PeriodicidadSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('Periodicidad', PeriodicidadSchema);