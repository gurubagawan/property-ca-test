const initialState = [];

const findFaves = (list) => {
  list.map((item, i) => {
    if (item.favourite) {
      return item;
    } else return null;
  });
};

export default function favourites(state = initialState, action) {
  // console.log('this', action);
  console.log(findFaves(state));
  console.log('here', state);
  switch (action.type) {
    //   case ADD_FAV: {
    //     // Returning a new state instead of just altering the selected item
    //     // Where payload is the id of the song you want to mark as favorite
    //     return updateFavFlag(state, payload, true);
    //   }
    //   case REMOVE_FAV:
    //     return updateFavFlag(state, payload, false);
    default:
      return state;
  }
}
