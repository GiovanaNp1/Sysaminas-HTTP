
const Produto = require('../Model/Produto')

module.exports = {

async index (request, response){
    const produto = await Produto.find();
    console.log('GET', produto);
    return response.json(produto)
},

async store (request, response){
    const produto = await Produto.find();
    console.log('GET', produto);
    return response.json(produto)
},

async create (request, response){
    const { nome, tipo, valor, qualidade, descrição } = request.body

        let produto = await Produto.create({
            nome,
            tipo,
            valor,
            qualidade,
            descrição,
        })
    console.log(produto)
    return response.json(produto)
    },

    async update (req, res, next) {  
    var id = req.body.id;  
     
    Produto.findById(id, function(err, doc) {  
      if (err) {  
        console.error('error, no entry found');  
      }  
            doc.nome = req.body.nome,
            doc.tipo = req.body.tipo,
            doc.valor = req.body.valor,
            doc.qualidade = req.body.qualidade,
            doc.descrição = req.body.descrição
            doc.save();  
    })  
    return res.json(req.body)
   },


    async destroy (request, response){
        console.log(request.query)
        const params = request.query
        await Produto.findByIdAndDelete(params._id)
        return response.send('Deletou essa bagaça')
    }
}