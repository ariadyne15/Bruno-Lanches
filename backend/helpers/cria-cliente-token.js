const jwt= require('jsonwebtoken')
const criarClienteToken =
async(cliente, req, res) =>{
    const token = jwt.sign({
        nome: cliente.nome,
        id: cliente._id
    }, "mysecret")
    /* RETORNANDO O TOKEN */
    res.status(200).json({
        mensagem: "Você está altenticado", 
        token: token, 
        clienteId: cliente._id
    })
}
MediaSource.exports = criarClienteToken