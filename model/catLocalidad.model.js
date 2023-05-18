const { Schema, model } = require('mongoose');

const LocalidadSchema = Schema({
    c_Localidad: {
        type: String,
        required: true,
        unique: true
    },
    c_Estado: {
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    }
}, {
    collection: 'catLocalidad'
});

LocalidadSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('Localidad', LocalidadSchema);
