const {Router} = require('express');
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController');
const routes = Router();

routes.get('/search', SearchController.index);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/produtos', DevController.prod);


module.exports = routes