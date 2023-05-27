const { Schema, model } = require('mongoose');

const catClaveProductosSchema = new Schema({
    c_ClaveProdServ: {
        type: String,
        required: true
    },
    Descripción: {
        type: String,
        required: true
    },
    'Incluir IVA trasladado': {
        type: String,
        required: true
    },
    'Estímulo Franja Fronteriza': {
        type: String,
        required: true
    },
    'Palabras similares': {
        type: [String],
        required: true
    }
}, {
    collection: 'catClaveProductos'
});


catClaveProductosSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
});
module.exports = model('ClaveProductos', CatClaveProductos);
