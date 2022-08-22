import {MOVIESSHOWSLIST, MOVIESHOWDETAIL} from '../types/dashboardType';

const initialState = {moviesAndShowsList: [], detailData: {}};

const moviesAndShowsReducer = (moviesAndShows = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case MOVIESSHOWSLIST:
      return {...moviesAndShows, moviesAndShowsList: payload};

    case MOVIESHOWDETAIL:
      return {...moviesAndShows, detailData: payload};

    default:
      return moviesAndShows;
  }
};

export default moviesAndShowsReducer;
