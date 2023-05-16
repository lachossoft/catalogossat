const { Router } = require('express');
const { getAllMetodoPago } = require('../controller/metodopago.controller');

const router = Router();

router.get('/list', getAllMetodoPago);

module.exports = router;
