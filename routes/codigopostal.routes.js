const express = require('express');
const router = express.Router();
const {getCodigoPostal} = require('../controller/codigopostal.controller');
const { validateSearchCodigoPostal } = require('../validators/codigopostal.validator');



// Ruta para obtener un código postal por su valor
router.get('/:codigoPostal/:c_pais',validateSearchCodigoPostal,getCodigoPostal);

module.exports = router;
