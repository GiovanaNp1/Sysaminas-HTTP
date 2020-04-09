const mongoose = require ('mongoose')

const HabitanteSchema = new mongoose.Schema({
    nome: String,
    sexo: String,
    rua: String,
    numero: Number,
    Cep: Number,
    telefone: Number,
    familia: {
        nome: String,
        rua: String,
        numero: Number,
        telefone: Number
    },
    amigos: {
        nome: String,
        rua: String,
        numero: Number,
        telefone: Number  
    },
})

module.exports =  mongoose.model('Habitantes', HabitanteSchema)