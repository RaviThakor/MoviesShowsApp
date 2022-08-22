import {MOVIESSHOWSLIST, MOVIESHOWDETAIL} from '../types/dashboardType';
import axiosApiInstance from '../../axios';

export const getMoviesAndShows = value => async dispatch => {
  try {
    const res = await axiosApiInstance.get(`?s=${value}&apikey=5f0bfd39`);

    if (res.data.Response) {
      dispatch({
        type: MOVIESSHOWSLIST,
        payload: res.data.Search,
      });
    }
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getDescription = value => async dispatch => {
  try {
    const res = await axiosApiInstance.get(`?i=${value}&apikey=5f0bfd39`);

    if (res.status) {
      dispatch({
        type: MOVIESHOWDETAIL,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log('error : ', error);
  }
};
