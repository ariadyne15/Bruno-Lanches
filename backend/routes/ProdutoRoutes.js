const router = require('express').Router()
const ProdutoController = require('../controllers/ProdutoController')

router.post('/novoProduto',ProdutoController.cadastrar)

   
module.exports = router