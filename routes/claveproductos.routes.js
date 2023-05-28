const express = require('express');
const router = express.Router();
const { validateSearchClave } = require('../validators/claveproductos.validator');
const {getClavesProductos} = require('../controller/claveproductos.controller');

// Ruta para obtener claves de productos
router.get('/search',validateSearchClave,getClavesProductos);

module.exports = router;
