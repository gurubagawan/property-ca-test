import { ADD_FAV, REMOVE_FAV } from './types';

export const addToFavoriteFunction = (isFavorite) => {
  return {
    type: ADD_FAV,
    payload: isFavorite,
  };
};

export const removeFromFavoriteFunction = (isFavorite) => {
  return {
    type: REMOVE_FAV,
    payload: isFavorite,
  };
};
