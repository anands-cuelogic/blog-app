import React from 'react';
import './BlogContainer.css';
import Blog from '../../components/blog/blog';

function BlogContainer() {
  console.log('?????PROPS ')
  return (
    <div className="content">
      <div>
        <Blog />
      </div>
    </div>
  )
}

export default BlogContainer;
