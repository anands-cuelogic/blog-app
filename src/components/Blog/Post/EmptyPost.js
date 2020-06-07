import React from 'react';
import './EmptyPost.css';
import AddButton from '../../UI/Button/AddButton';

const EmptyPost = props => {
  return (
    <div className="blog-container">
      <div className="box">
        <div className="icon">404</div>
        <div className="blog-content">
          <h3>No Post Found</h3>
          <AddButton onShow={props.onShow}/>
        </div>
      </div>
    </div>
  )
}

export default EmptyPost;
