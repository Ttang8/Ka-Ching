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
    url: 'http://localhost:3000/api/items',
  })
);

export const fetchItem = id => (
  axios({
    method: 'GET',
    url: `http://localhost:3000/api/items/${id}`
  })
);

export const createItem = item => (
  axios({
    method: 'POST',
    url: 'http://localhost:3000/api/items',
    data: item 
  })
);

export const deleteItem = id => (
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/api/items/${id}`
  })
);

export const editItem = item => (
  axios({
    method: 'PUT',
    url: `http://localhost:3000/api/items/${item.id}`,
    data: item
  })
)