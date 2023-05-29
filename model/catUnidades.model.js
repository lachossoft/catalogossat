const { Schema, model } = require('mongoose');

const UnidadSchema = Schema({
  c_ClaveUnidad: {
    type: String,
    required: true,
    unique: true,
  },
  Nombre: {
    type: String,
    required: true,
  },
  Descripcion: {
    type: String,
    required: false,
  },
  Simbolo: {
    type: String,
    required: false,
  },
}, {
  collection: 'catUnidades',
});

UnidadSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Unidad', UnidadSchema);
