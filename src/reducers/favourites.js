// import store from '../../store';
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
  // console.log(findFaves([{ favourite: false }, { favourite: true }]));
  // console.log('here', store.getState());
  switch (action.type) {
    case ADD_FAV: {
      console.log('lll');
      // Returning a new state instead of just altering the selected item
      updateFavFlag(state, payload, true);
      // return findFaves(state);
      return state;
      // Where payload is the id of the song you want to mark as favorite
    }
    case REMOVE_FAV:
      updateFavFlag(state, payload, false);
      // return findFaves(state);
      return state;
    default:
      // return findFaves(state);
      return findFaves(state);
  }
}

// export default favourites;
