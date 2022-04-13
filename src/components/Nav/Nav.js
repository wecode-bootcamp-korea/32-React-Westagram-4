import React from 'react';
import './Nav.scss';

const b = '../../assets/images/search_icon.png';

const Nav = () => {
  return (
    <div className="main-container">
      <nav className="nav-container">
        <div className="nav-left">
          <img className="nav-icon" alt="zz" src="images/instagram_icon.png" />
          <span className="nav-title">&#x0007C; Westagram</span>
        </div>
        <div className="nav-center">
          <input className="nav-search" type="text" placeholder="검색" />
        </div>
        <div className="nav-right">
          <img className="nav-icon" alt="zz" src="images/explore_icon.png" />
          <img
            className="nav-icon"
            alt="zz"
            src="images/heart_empty_icon.png"
          />
          <img className="nav-icon" alt="zz" src="images/profile_icon.png" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
