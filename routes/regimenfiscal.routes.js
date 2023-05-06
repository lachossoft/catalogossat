const { Router } = require('express')
const { getRegimenFiscal, getRegimenFiscalList } = require('../controller/regimenfiscal.controller')


const router = Router()

router.get('/get/:regimenkey', getRegimenFiscal)
router.get('/list/:ismoralperson', getRegimenFiscalList)

module.exports = router