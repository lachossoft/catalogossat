const express = require('express');
const router = express.Router();
const {getAllUnidades,getUnidadByClave} = require('../controller/unidades.controller');

// Ruta para obtener todas las unidades
router.get('/list', getAllUnidades);

// Ruta para obtener una unidad por c_ClaveUnidad
router.get('/:c_ClaveUnidad', getUnidadByClave);

module.exports = router;
