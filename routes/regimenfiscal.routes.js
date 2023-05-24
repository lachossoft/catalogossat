const { Router } = require('express')
const { getRegimenFiscal, getRegimenFiscalList } = require('../controller/regimenfiscal.controller')
const { validateSearchKey,validateSearchMoral } = require('../validators/regimenfiscal.validator');


const router = Router()

router.get('/get/:regimenkey',validateSearchKey, getRegimenFiscal)
router.get('/list/:ismoralperson',validateSearchMoral, getRegimenFiscalList)

module.exports = router