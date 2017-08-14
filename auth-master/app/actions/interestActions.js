import * as APIUtil from '../api/api_util_items';

export const RECEIVE_INTEREST = 'RECEIVE_INTEREST';

export const receiveInterest = buyItems => ({
  type: RECEIVE_INTEREST,
  buyItems
});

export const fetchInterests = buyItems => dispatch => (
  APIUtil.fetchInterests(buyItems)
    .then(interestItems => {
      console.log('actions',interestItems)
      return dispatch(receiveInterest(interestItems.data))
    }
  )
)