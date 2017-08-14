import axios from 'axios';

export const fetchItems = (userPosition) => {
  console.log('fetch',userPosition);
  return axios({
    method: 'GET',
    url: `https://fierce-taiga-51990.herokuapp.com/api/items?lat=${userPosition.lat}&lng=${userPosition.lng}`
  });
};

export const fetchInterests = (buyItems) => (
  axios({
    method: 'POST',
    url: 'https://fierce-taiga-51990.herokuapp.com/api/interestitems',
    data: buyItems
  })
);

export const fetchItem = id => (
  axios({
    method: 'GET',
    url: `https://fierce-taiga-51990.herokuapp.com/api/items/${id}`
  })
);

export const createItem = item => (
  axios({
    method: 'POST',
    url: 'https://fierce-taiga-51990.herokuapp.com/api/items',
    data: item
  })
);

export const deleteItem = id => (
  axios({
    method: 'DELETE',
    url: `https://fierce-taiga-51990.herokuapp.com/api/items/${id}`
  })
);

export const editItem = item => (
  axios({
    method: 'PUT',
    url: `https://fierce-taiga-51990.herokuapp.com/api/items/${item.id}`,
    data: item
  })
);
