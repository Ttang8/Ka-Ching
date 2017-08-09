// const ItemsController = require('../controllers/item_controller');
const UsersController = require('../controllers/users_controller');

module.exports = (app) => {
  // app.get('/api/items', ItemsController.index);
  // app.post('/api/items', ItemsController.create);
  // app.put('/api/items/:id', ItemsController.edit);
  // app.delete('/api/items/:id', ItemsController.delete);

  app.get('/api/users', UsersController.getUsers);
  app.get('/api/user/:id', UsersController.getUser);
  app.put('/api/users/:id', UsersController.updateUser);
};
