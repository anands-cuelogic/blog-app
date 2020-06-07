import { combineReducers } from 'redux';
import auth from './authReducer';
import blog from './blogReducer';

const rootReducer = combineReducers({
  auth,
  blog
});

export default rootReducer;