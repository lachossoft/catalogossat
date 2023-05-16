const { Router } = require('express');
const { getAllPeriodicidad } = require('../controller/periocidad.controller');

const router = Router();

router.get('/list', getAllPeriodicidad);

module.exports = router;
