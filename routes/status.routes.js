const { Router } = require('express')
const { status } = require('../controller/status.controller')

const router = Router()

router.get('', status)

module.exports = router