const { Schema, model } = require('mongoose');

const PaisSchema = Schema({
    c_Pais: {
        type: String,
        required: true,
        unique: true
    },
    Descripcion: {
        type: String,
        required: true
    }
}, {
    collection: 'catPais'
});

PaisSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});

module.exports = model('Pais', PaisSchema);
