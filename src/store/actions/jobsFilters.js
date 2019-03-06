import * as actionTypes from "./actionTypes";
import { Fetch } from "../../server/request";
export const filtersFetchStart = () => {
  return {
    type: actionTypes.FILTERS_FETCH_START
  };
};

export const filtersFetchSuccess = filters => {
  return {
    type: actionTypes.FILTERS_FETCH_SUCCESS,
    filters: filters
  };
};

export const filtersFetchFail = error => {
  return {
    type: actionTypes.FILTERS_FETCH_FAIL,
    error: error
  };
};

export const fetchFilters = () => {
  return async dispatch => {
    dispatch(filtersFetchStart());
    try {
      let response = await Fetch("filter");

      console.log(response.data);
      dispatch(filtersFetchSuccess(response.data));
    } catch (err) {
      dispatch(filtersFetchFail(err));
    }
  };
};
