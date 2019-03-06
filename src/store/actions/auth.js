import * as actionTypes from "./actionTypes";
import { Post } from "../../server/request";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, user, isRegister) => {
  if (isRegister) {
    return {
      type: actionTypes.AUTH_SUCCESS
    };
  } else {
    return {
      type: actionTypes.AUTH_SUCCESS,
      token: token,
      user: user
    };
  }
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
export const auth = (data, isRegister) => {
  return async dispatch => {
    dispatch(authStart());
    let authData;
    let url;
    if (isRegister) {
      authData = {
        UserName: data.UserName,
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
        Password: data.Password
      };
      url = "auth/register";
    } else {
      authData = {
        username: data.username,
        password: data.password
      };
      url = "auth/login";
    }
    try {
      let response = await Post(url, authData);

      // later append message to confirm shit
      if (isRegister) {
        dispatch(authSuccess(null, null, true));
      } else {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user",
          response.data.user.firstName + " " + response.data.user.lastName
        );
        dispatch(
          authSuccess(
            response.data.token,
            response.data.user.firstName + " " + response.data.user.lastName,
            false
          )
        );
      }
    } catch (err) {
      dispatch(authFail(err));
    }
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
