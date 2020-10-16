import { ADD_FAV, REMOVE_FAV } from '../actions/types';
import initialState from './initialState';

const updateFavFlag = (list, itemId, flag) => {
  return list.map((item, i) => {
    if (i === itemId) {
      return { ...item, favourite: flag };
    }
  });
};

export default function isFavouriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV: {
      return updateFavFlag(state, payload, true);
    }
    case REMOVE_FAV:
      return updateFavFlag(state, payload, false);
    default:
      return state;
  }
}
