import * as actionTypes from '../action/actionTypes';

const initialState = {
  posts  : [],
  post   : null,
  loading: false,
  error  : null,
  pending: false
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.BLOG_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        error  : null,
        posts  : action.payload
      };
    
    case actionTypes.BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case actionTypes.POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: action.payload
      };

    case actionTypes.POST_DELETE_START:
      return {
        ...state,
        loading: true,
        pending: true
      };

    case actionTypes.POST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        pending: false
      };

    case actionTypes.POST_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        pending: false
      }

    default:
      return state;
  }
};

export default blogReducer;