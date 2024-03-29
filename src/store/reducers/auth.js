import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  token:
    localStorage.getItem("token") !== null
      ? localStorage.getItem("token")
      : null,
  user:
    localStorage.getItem("user") !== null ? localStorage.getItem("user") : null
};

const authStart = (state, action) => {
  return updateObject(state);
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    user: action.user
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error
  });
};
const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
