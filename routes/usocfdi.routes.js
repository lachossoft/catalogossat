const { Router } = require('express');
const { getAllUsoCFDI } = require('../controller/usocfdi.controller');
const { validateSearchUsoCFDI } = require('../validators/usocfdi.validator');

const router = Router();

router.get('/list/:PersonaMoral/:regimenFiscal', validateSearchUsoCFDI, getAllUsoCFDI);

module.exports = router;
