import {FAVOURITES_LIST} from '../types/favouriteType';

const initialState = {favouriteList: []};

const favouriteReducer = (favourites = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case FAVOURITES_LIST:
      return {
        ...favourites,
        favouriteList: [...favourites.favouriteList, payload],
      };

    default:
      return favourites;
  }
};

export default favouriteReducer;
