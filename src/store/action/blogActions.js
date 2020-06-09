import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './actionTypes';
import axios from '../../axios-blog';

export const blogStart = () => {
  return {
  type: actionTypes.BLOG_START
}};

export const blogSuccess = (payload) => {
  return {
  type: actionTypes.BLOG_SUCCESS,
  payload
  };
};

export const blogFail = (error) => ({
  type: actionTypes.BLOG_FAIL,
  error
});

export const postSuccess = (payload) => ({
  type: actionTypes.POST_SUCCESS,
  payload
});

export const postDeleteStart = () => ({
  type: actionTypes.POST_DELETE_START
});

export const postDeleteSuccess = () => ({
  type: actionTypes.POST_DELETE_SUCCESS
});

export const postDeleteFail = (error) => ({
  type: actionTypes.POST_DELETE_FAIL
})


export const fetchPost = (token, id) => {
  return async (dispatch) => {
    dispatch(blogStart());
    try {
      const response = await axios.get(`/post.json/?auth=${token}&orderBy="id"&equalTo="${id}"`);

      let post = null;
      for ( let key in response.data ) {
        post = {...response.data[key], key};
      }
      dispatch(postSuccess(post));

    } catch(error) {
      dispatch(blogFail(error));
    }
  }
}

export const blog = (token, userId) => {
  return async (dispatch) => {
    dispatch(blogStart());

    try {
      const response = await axios.get(`/post.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`);
      let fetchedPost = [];

      for ( let key in response.data ) {
        fetchedPost.push( {
            ...response.data[key],
            key
        } );
      }

      fetchedPost.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });

      dispatch(blogSuccess(fetchedPost));

    } catch (error) {
      dispatch(blogFail(error));
    }
  }
}

export const createBlog = (token, blogPostData, method = 'GET') => {
  return async (dispatch) => {
    dispatch(blogStart());
    try {
      const data = {
        ...blogPostData,
        createdAt: new Date().toISOString(),
        id: method==="GET" ? uuidv4() : blogPostData.id
      }
      console.log('BLOG ACTION ', blogPostData, method);
      if(method === 'GET') {
        await axios.post(`/post.json?auth=${token}`, data);
      } else if(method === 'PUT') {
        const key = data.key;
        delete(data.key);
        await axios.put(`/post/${key}.json?auth=${token}`, data);
      }

      dispatch(blog(token, blogPostData.userId));

    } catch (error) {
      dispatch(blogFail(error));
    }  
  }
}

export const deletePost = (key) => {
  return async dispatch => {
    dispatch(postDeleteStart());
    try {
      await axios.delete(`/post/${key}.json`);
      dispatch(postDeleteSuccess());

    } catch(error) {
      console.log(error);
      dispatch(postDeleteFail(error));
    }
  }
}