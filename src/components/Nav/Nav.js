import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('uri');
  });

  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <i class="fa-brands fa-instagram" />
          <span className="title">&#x0007C; Westagram</span>
        </div>
        <div className="nav-center">
          <input className="search-bar" type="text" placeholder="검색" />
        </div>
        <div className="nav-right">
          <i class="fa-regular fa-compass" />
          <i class="fa-regular fa-heart" />
          <i class="fa-regular fa-user" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
