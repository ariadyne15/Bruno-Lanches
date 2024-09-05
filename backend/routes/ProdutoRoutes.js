const router = require('express').Router()
const ProdutoController = require('../controllers/ProdutoController')

/*OBTER TODOS OS PRODUTOS */
router.get('/',ProdutoController.buscarTodos)

/*GRAVAR UM NOVO PRODUTO */
router.post('/novoProduto',ProdutoController.cadastrar)

   
module.exports = router