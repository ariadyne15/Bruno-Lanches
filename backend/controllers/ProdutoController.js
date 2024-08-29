const Produto = require('../models/Produto')

module.exports = class ProdutoController{
    
    /* MÉTODO CADASTRAR*/
    static async cadastrar(req, res){ 
        const sku = req.body.sku
        const marca = req.body.marca
        const descricao = req.body.descricao
        const preco = req.body.preco
        const dataFabricacao= req.body.dataFrabricacao

        if(!sku){
            res.status(422).json({mensagem: "O código sku é obrigatório"})
            return
        }
        if(!marca){
            res.status(422).json({mensagem: "A marca é obrigatória"})
            return
        }
        if(!descricao){
            res.status(422).json({mensagem: "A descrição é obrigatória"})
            return
        }
        if(!preco){
            res.status(422).json({mensagem: "O preço é obrigatório"})
            return
        }
        if(!dataFabricacao){
            res.status(422).json({mensagem: "A  data da fabricação é obrigatória"})
            return
        }
    
        /* VERIFICA EXSISTENCIA DO PRODUTO*/
        const produtoExiste = await Produto.findOne ({sku:sku})

        if (produtoExiste){
            res.status(422).json({mensagem: "Produto já cadastrado!"})
            resturn
        }
        
        /* CACASTRO DE PRODUTO */
       const produto = new Produto({sku,marca,descricao,preco,dataFrabricacao})
      


        try{
            const novoProduto = await produto.save()
        
        } catch(erro){
            res.status(500).json({mensagem: erro})
        }
    } /* FIM DO MÉTODO CADASTRAR */

    }/* FIM DA CLASS PRODUTOCONTROLLER*/

