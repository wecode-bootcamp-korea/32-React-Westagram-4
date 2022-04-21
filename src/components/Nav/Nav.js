import React from 'react';
import { Outlet } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <i className="fa-brands fa-instagram" />
          <span className="title">&#x0007C; Westagram</span>
        </div>
        <div className="nav-center">
          <input className="search-bar" type="text" placeholder="검색" />
        </div>
        <div className="nav-right">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-user" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
