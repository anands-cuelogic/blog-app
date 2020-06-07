import axios from 'axios';

import * as actionTypes from './actionTypes';

const apiKey = 'AIzaSyA0KweKmULuI7kBSsdVDVMKj03mJ77NdLY';

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = (token, userId) =>  ({
  type: actionTypes.AUTH_SUCCESS,
  token,
  userId
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error: error.message
});

export const logout = () => ({
  type: actionTypes.AUTH_LOGOUT
});

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime*1000);
  }
}

export const auth = (email, password, isSignUp) => {
  return async dispatch => {
    dispatch(authStart());
    try {
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
      if(isSignUp) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
      }
      const authData = {
        email,
        password,
        returnSecureToken: true
      }

      const response = await axios.post(url, authData)
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    } catch(error) {
      dispatch(authFail(error.response.data.error));
    }
  }
}