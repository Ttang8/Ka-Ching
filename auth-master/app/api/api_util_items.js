import axios from 'axios'
// app.get('/api/items', ItemsController.indexItems);
// app.get('/api/items/:id', ItemsController.indexItem);
// app.post('/api/items', ItemsController.createItem);
// app.put('/api/items/:id', ItemsController.editItem);
// app.delete('/api/items/:id', ItemsController.deleteItem);
// app.get('/api/items?lng={}&lat={}')


// api_util

export const fetchItems = () => (
  axios({
    method: 'GET',
    url: '/api/items',
  })
);

export const fetchItem = id => (
  axios({
    method: 'GET',
    url: `/api/items/${id}`
  })
);

export const createItem = item => (
  axios({
    method: 'POST',
    url: '/api/items',
    data: { item }
  })
);