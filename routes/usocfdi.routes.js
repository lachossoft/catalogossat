const { Router } = require('express');
const { getAllUsoCFDI } = require('../controller/usocfdi.controller');
const { validateSearchUsoCFDI } = require('../validators/usocfdi.validator');

const router = Router();

router.get('/list/:c_UsoCFDI/:PersonaMoral/:regimenFiscal', validateSearchUsoCFDI, getAllUsoCFDI);

module.exports = router;
