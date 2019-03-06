import * as actionTypes from "./actionTypes";
import { Fetch } from "../../server/request";
export const jobsFetchStart = () => {
  return {
    type: actionTypes.JOBS_FETCH_START
  };
};

export const jobsFetchSuccess = jobs => {
  return {
    type: actionTypes.JOBS_FETCH_SUCCESS,
    jobs: jobs
  };
};

export const jobsFetchFail = error => {
  return {
    type: actionTypes.JOBS_FETCH_FAIL,
    error: error
  };
};

export const fetchJobs = url => {
  return async dispatch => {
    dispatch(jobsFetchStart());
    try {
      let response = await Fetch(url);

      console.log(response.data);
      dispatch(jobsFetchSuccess(response.data));
    } catch (err) {
      dispatch(jobsFetchFail(err));
    }
  };
};
