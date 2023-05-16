const { Router } = require('express');
const { getAllTipoComprobante } = require('../controller/tipocomprobante.controller');

const router = Router();

router.get('/list', getAllTipoComprobante);

module.exports = router;