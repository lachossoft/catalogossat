const express = require('express');
const router = express.Router();
const {getCodigoPostal} = require('../controller/codigopostal.controller');

// Ruta para obtener un código postal por su valor
router.get('/:codigoPostal',getCodigoPostal);

module.exports = router;
