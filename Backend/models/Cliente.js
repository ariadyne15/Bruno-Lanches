const mongoose = require('../db/conecta')
const {Schema} = mongoose

const cliente = mongoose.model('cliente',
new Schema({
    nome:{type: String, required: true},
    email:{type: String, required: true},
    senha:{type: String, required: true},
    telefone:{type: String, required: true}
},
{timestamps:true}
))

module.exports = cliente