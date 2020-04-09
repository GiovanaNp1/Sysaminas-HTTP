
const Produto = require('../Model/Produto')

module.exports = {
    async index (request, response){
        const { tipo } = request.query
        const produto = await Produto.find({
            tipo : tipo
        });

        console.log(produto)
        return response.json({ produto });
    }
}