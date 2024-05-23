const express = require('express')
const cors = require('cors')
const app = express()
const ClienteRoutes = require('./routes/ClienteRoutes')

    //Configuração de respostas do JSON
    app.use(express.json())
    app.use(cors({Credentials: true, origin: 'htt://localhost:300'}))

    app.use(express.static('public'))

    /* HABILITAR USO DE ROTAS PELO EXPRESS */
    app.use('/cliente',ClienteRoutes)

    app.listen(5000)