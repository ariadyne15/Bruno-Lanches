const express = require('express')
const cors = require('cors')
const app = express()
const ClienteRoutes = require('./routes/ClienteRoutes')
const ProdutoRoutes = require('./routes/ProdutoRoutes')

    //Configuração de respostas do JSON
    app.use(express.json())
    app.use(cors({Credentials: true, origin: 'htt://localhost:300'}))

    app.use(express.static('public'))

    /* HABILITAR USO DE ROTAS PELO EXPRESS */
    app.use('/clientes',ClienteRoutes)
    app.use('/produtos',ProdutoRoutes)
    app.listen(5000)