const ItemsController = require('../controllers/items_controller');
const UsersController = require('../controllers/users_controller');

module.exports = (app) => {
  app.get('/api/allitems', ItemsController.allItems);
  app.get('/api/items', ItemsController.indexItems);
  app.get('/api/items/:id', ItemsController.indexItem);
  app.get('/api/category/:category', ItemsController.categorizeItem);
  app.post('/api/items', ItemsController.createItem);
  app.put('/api/items/:id', ItemsController.editItem);
  app.delete('/api/items/:id', ItemsController.deleteItem);

  app.get('/api/users', UsersController.getUsers);
  app.get('/api/users/:id', UsersController.getUser);
  app.put('/api/users/:id', UsersController.updateUser);
  app.delete('/api/users/:id', UsersController.deleteUser);
};
