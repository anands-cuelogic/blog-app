import React from 'react';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.min.css';
import BlogImage from '../../assets/images/blog.svg';

import './Blog.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Blog = props => {

  return (
    <div className="col-md-6 col-xs-12 col-lg-4">
      <div className="card green">
        <div className="additional">
          <div className="user-card">
            <div className="level center">
              {moment(props.post.createdAt).format('HH MMM Y')}
              </div>
            <img src={BlogImage} alt="..." />
          </div>
          <div className="more-info">
            <h1 onClick={() => props.onfetchPost(props.post.id)}>{props.post.title || ""}</h1>
            <div className="stats">
              <div>
                <button type="button" className="btn btn-info"><FaEdit /> Edit</button>
              </div>
              <div>
                <button type="button" className="btn btn-danger" onClick={props.onDeletePost}><FaTrash /> Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{props.post.title || ""}</h1>
          <p>{props.post.content.slice(0,100)}...</p>
          <span className="more">Read more <b>&rarr;</b></span>
        </div>
      </div>
    </div>
  )
}

export default Blog;
