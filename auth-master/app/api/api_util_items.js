import axios from 'axios';

export const fetchItems = () => (
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/allitems'
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
);
