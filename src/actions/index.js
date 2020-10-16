import { ADD_FAV, REMOVE_FAV } from './types';

export function addToFavoriteFunction(isFavorite) {
  console.log(isFavorite);
  return {
    type: ADD_FAV,
    payload: isFavorite,
  };
}

export function removeFromFavoriteFunction(isFavorite) {
  return {
    type: REMOVE_FAV,
    payload: isFavorite,
  };
}
