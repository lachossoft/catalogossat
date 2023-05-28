const { Schema, model } = require('mongoose');

const catClaveProductosSchema = new Schema({
    c_ClaveProdServ: {
      type: String,
      required: true
    },
    Descripcion: {
      type: String,
      required: true
    },
    IVAtrasladado: {
      type: String,
      required: true
    },
    EstimuloFranja: {
      type: String,
      required: true
    },
    PalabrasClave: {
      type: String,
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
module.exports = model('ClaveProductos', catClaveProductosSchema);
