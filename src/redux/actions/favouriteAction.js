import {FAVOURITES_LIST} from '../types/favouriteType';

export const setFavouriteList = value => dispatch => {
  dispatch({
    type: FAVOURITES_LIST,
    payload: value,
  });
};
