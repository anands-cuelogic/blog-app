import * as actionTypes from '../action/actionTypes';

const initialState = {
  posts  : [],
  loading: false,
  error  : null
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

    default:
      return state;
  }
};

export default blogReducer;