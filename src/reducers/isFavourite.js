import { ADD_FAV, REMOVE_FAV } from '../actions/types';
import initialState from './initialState';

// const initialState = [];

const updateFavFlag = (list, itemId, flag) => {
  console.log('ran update');
  return list.map((item, i) => {
    if (i === itemId) {
      return { ...item, favourite: flag };
    }
  });
};

export default function isFavouriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV: {
      // Returning a new state instead of just altering the selected item
      // Where payload is the id of the song you want to mark as favorite
      return updateFavFlag(state, payload, true);
    }
    case REMOVE_FAV:
      return updateFavFlag(state, payload, false);
    default:
      return state;
  }
}
