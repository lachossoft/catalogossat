const { Schema, model } = require('mongoose');

const CodigoPostalSchema = Schema({
    c_CodigoPostal: {
        type: String,
        required: true,
        unique: true
    },
    c_Estado: {
        type: String,
        required: true
    },
    c_Municipio: {
        type: String,
        required: true
    },
    c_Localidad: {
        type: String,
        required: false
    }
}, {
    collection: 'catCodigoPostal'
});

CodigoPostalSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('CodigoPostal', CodigoPostalSchema);
