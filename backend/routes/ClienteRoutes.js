const router = require('express').Router()
const ClienteController = require('../ClienteController/ClienteController')

router.post('/registrar', ClienteController.registrar)

   
module.exports = router
