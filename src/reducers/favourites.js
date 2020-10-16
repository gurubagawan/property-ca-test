import { ADD_FAV, REMOVE_FAV } from '../actions/types';
import initialState from './initialState';

function findFaves(list) {
  return list.filter((item) => item.favorite == true);
}

function updateFavFlag(list, itemId, flag) {
  return list.map((item, i) => {
    if (i === itemId) {
      return { ...item, favourite: flag };
    }
  });
}

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV: {
      updateFavFlag(state, payload, true);
      return state;
    }
    case REMOVE_FAV:
      updateFavFlag(state, payload, false);
      return state;
    default:
      return findFaves(state);
  }
}
