import React from 'react';
import './AddButton.css';
import { FaBlog } from 'react-icons/fa';

const AddButton = props => {
  return (
    <ul className="socialIcons">
      <li className="CreatePost" onClick={props.onShow}><FaBlog /> Create Post</li>
    </ul>
  )
}

export default AddButton;
