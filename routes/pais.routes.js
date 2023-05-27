const express = require('express');
const { getAllPaises } = require('../controller/pais.controller');

const router = express.Router();

// Ruta para obtener todos los países
router.get('/list', getAllPaises);

module.exports = router;
