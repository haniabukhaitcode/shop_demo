import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  careers: [],
  industries: [],
  degrees: []
};

const filtersFetchStart = (state, action) => {
  return updateObject(state);
};

const filtersFetchSuccess = (state, action) => {
  return updateObject(state, {
    careers: action.filters.careers,
    industries: action.filters.industries,
    degrees: action.filters.degrees
  });
};

const filtersFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTERS_FETCH_START:
      return filtersFetchStart(state, action);
    case actionTypes.FILTERS_FETCH_SUCCESS:
      return filtersFetchSuccess(state, action);
    case actionTypes.FILTERS_FETCH_FAIL:
      return filtersFetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
