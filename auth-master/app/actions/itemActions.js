import * as APIUtil from '../api/api_util_items';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

// sync

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

// async

export const fetchItems = () => dispatch => (
  APIUtil.fetchItems()
    .then(items => {
      return dispatch(receiveItems(items))
    }
  )
);

export const fetchItem = (id) => dispatch => (
  APIUtil.fetchItem(id)
    .then(item => (
      dispatch(receiveItem(item))
    )
  )
);

export const createItem = item => dispatch => (
  APIUtil.createItem(item)
    .then(item => (
      dispatch(receiveItem(item))
    )
  )
);


// once we have fetchItems working, update itemsreducer to have  case to handle deleteItem
export const deleteItem = id => dispatch => (
  APIUtil.deleteItem(id)
    .then(() => (
      dispatch(deleteItem(id))
    ))
    .then(() => (
      dispatch(receiveItem(null))
    ))
);

export const editItem = item => dispatch => (
  APIUtil.editItem(item)
    .then(item => (
      dispatch(receiveItem(item))
    )
  )
)
