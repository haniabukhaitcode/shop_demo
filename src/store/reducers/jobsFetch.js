import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  jobs: []
};

const jobsFetchStart = (state, action) => {
  return updateObject(state);
};

const jobsFetchSuccess = (state, action) => {
  return updateObject(state, { jobs: action.jobs });
};

const jobsFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOBS_FETCH_START:
      return jobsFetchStart(state, action);
    case actionTypes.JOBS_FETCH_SUCCESS:
      return jobsFetchSuccess(state, action);
    case actionTypes.JOBS_FETCH_FAIL:
      return jobsFetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
