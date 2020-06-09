import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { FaBars } from 'react-icons/fa';

function Header() {
  return (
    <>
    <input type="checkbox" id="check" style={{display: 'none'}} />
    <header>
      <label htmlFor="check">
        <FaBars id="sidebar_btn"/>
      </label>
      <div className="left_area">
        <h3>Blog <span>App</span></h3>
      </div>
      <div className="right_area">
        <Link to="/logout" className="logout_btn">Logout</Link>
      </div>
    </header>
    </>
  )
}

export default Header;