const { Schema, model } = require('mongoose');

const ColoniaSchema = Schema({
    c_Colonia: {
        type: String,
        required: true,
        unique: true
    },
    c_CodigoPostal: {
        type: String,
        required: true
    },
    NombreAsentamiento: {
        type: String,
        required: true
    }
}, {
    collection: 'catColonia'
});

ColoniaSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('Colonia', ColoniaSchema);
