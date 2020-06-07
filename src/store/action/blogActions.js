import * as actionTypes from './actionTypes';
import axios from '../../axios-blog';

export const blogStart = () => ({
  type: actionTypes.BLOG_START
});

export const blogSuccess = (payload) => ({
  type: actionTypes.BLOG_SUCCESS,
  payload
});

export const blogFail = (error) => ({
  type: actionTypes.BLOG_FAIL,
  error
});

export const blog = (token, userId) => {
  return async (dispatch) => {
    dispatch(blogStart());

    try {
      const response = await axios.get(`/post.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`);
      let fetchedPost = [];
      for ( let key in response.data ) {
        fetchedPost.push( {
            ...response.data[key],
            id: key
        } );
      }
      dispatch(blogSuccess(fetchedPost));

    } catch (error) {
      dispatch(blogFail(error));
    }
  }
}

export const createBlog = (token, blogPostData) => {
  return async (dispatch) => {
    dispatch(blogStart);
    try {
      const data = {
        ...blogPostData,
        createdAt: new Date()
      }
      await axios.post(`/post.json?auth=${token}`, data);
      dispatch(blog(token, blogPostData.userId));

    } catch (error) {
      dispatch(blogFail(error));
    }  
  }
}