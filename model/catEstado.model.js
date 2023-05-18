const { Schema, model } = require('mongoose');

const EstadoSchema = Schema({
    c_Estado: {
        type: String,
        required: true,
        unique: true
    },
    c_Pais: {
        type: String,
        required: true
    },
    NombreEstado: {
        type: String,
        required: true
    }
}, {
    collection: 'catEstado'
});

EstadoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('Estado', EstadoSchema);
