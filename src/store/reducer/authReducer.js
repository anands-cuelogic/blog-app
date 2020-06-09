import * as actionType from '../action/actionTypes';

const initialState = {
  token  : null,
  userId : null,
  error  : null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.AUTH_START:
      return {
        ...state,
        loading: true,
        error  : null
      };

    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error  : null,
        token  : action.token,
        userId : action.userId
      };

    case actionType.AUTH_FAIL:
      return {
        ...state,
        token  : null,
        loading: false,
        error  : action.error
      };

    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        token : null,
        userId: null
      };

    default:
      return state;
  }
};

export default authReducer; 