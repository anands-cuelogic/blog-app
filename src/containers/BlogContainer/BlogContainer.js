import React, { useState } from 'react';
import './BlogContainer.css';
import Blog from '../../components/Blog/Blog';
import AddButton from '../../components/UI/Button/AddButton';
import CreateBlog from '../../components/Blog/CreateBlog/CreateBlog';

function BlogContainer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="content">
      <div>
        <AddButton onShow={handleShow}/>
        <CreateBlog show={show} onHide={handleClose}/>
        <Blog />
      </div>
    </div>
  )
}

export default BlogContainer;
