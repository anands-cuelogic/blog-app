import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSlidersH, FaBlog } from 'react-icons/fa';

import './Sidebar.css';
import logo from '../../assets/avatar.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <center>
        <img src={logo} alt="..." className="profile_image" />
      </center>
      <NavLink to="/" exact activeStyle={{background: "#19B3D3"}}><FaBlog /><span>Blogs</span></NavLink>
      <NavLink to="/profile" activeStyle={{background: "#19B3D3"}}><FaSlidersH /><span>Settings</span></NavLink>
    </div>
  )
}

export default Sidebar;
