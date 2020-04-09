const { Router } = require('express');
const HabitantesController = require('./Controllers/HabitantesController');
const ProdutosController = require('./Controllers/ProdutosController');
const SearchController = require('./Controllers/SearchController');

const routes = Router();

routes.get('/search/produtos', SearchController.index);

// routes.get('/habitantes', HabitantesController.index);
// routes.post('/habitantes', HabitantesController.create);
// routes.put('/habitantes', HabitantesController.update);
// routes.delete('/habitantes', HabitantesController.destroy);

routes.get('/produtos', ProdutosController.index);
routes.post('/produtos', ProdutosController.create);
routes.put('/produtos', ProdutosController.update);
routes.delete('/produtos/id', ProdutosController.destroy);

module.exports = routes