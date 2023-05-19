const { Router } = require('express');
const { getAllFormaPago, getFormaPagoByCFormaPago } = require('../controller/formapago.controller');
const { validateSearchFormaPago } = require('../validators/formapago.validator');

const router = Router();

router.get('/list', getAllFormaPago);
router.get('/:c_formaPago',validateSearchFormaPago, getFormaPagoByCFormaPago);

module.exports = router;
