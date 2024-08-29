const router = require('express').Router()
const ClienteController = require('../controllers/ClienteController')

router.post('/registrar', ClienteController.registrar)
router.post('/login', ClienteController.login)
//NOTA ROTA A PARTIR DE 25/07/2024
//router.get('/checkuser', ClienteController.verificacao)
   

module.exports = router