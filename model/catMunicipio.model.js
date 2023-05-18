const { Schema, model } = require('mongoose');

const MunicipioSchema = Schema({
    c_Municipio: {
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
    collection: 'catMunicipio'
});

MunicipioSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('Municipio', MunicipioSchema);
