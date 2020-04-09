const mongoose = require ('mongoose')

const ProdutoSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    valor: Number,
    qualidade: String,
    descrição: String
})

module.exports = mongoose.model('Produto', ProdutoSchema)