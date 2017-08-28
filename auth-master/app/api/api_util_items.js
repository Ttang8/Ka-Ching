import axios from 'axios';

export const fetchAllItems = () => {
  return axios({
    method: 'GET',
    url: 'http://localhost:3000/api/allitems'
  });
};

export const fetchItems = (userPosition) => {
  return axios({
    method: 'GET',
    url: `http://localhost:3000/api/items?lat=${userPosition.lat}&lng=${userPosition.lng}`
  });
};

export const fetchInterests = (buyItems) => (
  axios({
    method: 'POST',
    url: 'http://localhost:3000/api/interestitems',
    data: buyItems
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
