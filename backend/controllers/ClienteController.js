const cliente = require('../models/Cliente')
const bcrypt = require('bcrypt')
const criarClienteToken = require("../helpers/cria-cliente-token")

module.exports = class ClienteController{
    static async registrar(req, res){ 
        const nome = req.body.nome
        const email = req.body.email
        const telefone = req.body.telefone
        const senha = req.body.senha
        const senhaconf = req.body.senhaconf

        if(!nome){
            res.status(422).json({mensagem: "O nome é obrigatório"})
            return
        }
        if(!email){
            res.staus(422).json({mensagem: "O email é obrigatório"})
            return
        }
        if(!telefone){
            res.staus(422).json({mensagem: "O telefone é obrigatório"})
            return
        }
        if(!senha){
            res.status(422).json({mensagem: "A senha é obrigatória"})
            return
        }
        if(!senhaconf){
            res.status(422).json({mensagem: "Confirme a senha"})
            return
        }
    
        /* VERIFICA SE O CLIENTE JÁ ESTA CADASTRADO */
        const clienteExiste = await Cliente.findOne ({email:email})

        if (clienteExiste){
            res.status(422).json({mensagem: "E-mail ja cadastrado"})
            resturn
        }
        
        /* CRIAÇÃO DE SENHA */
       const salt = await bcrypt.genSalt(12)
       const senhaHash = await bcrypt.hash(senha,salt)

       /* ADICIONANDO O CLIENTE AO BD */
       const cliente = new Cliente({nome, email, telefone, senha: senhaHash})

        try{
            const novoCliente = await cliente.save()
            await criarClienteToken(novoCliente, req, res)
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    } /* FIM DO MÉTODO REGISTRAR */
}