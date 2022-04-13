import React from "react";
import './Nav.scss';

const Nav = () => {
  return (
    
    <div className='main-container'>
    <nav className='nav-container'>
        <div className='nav-left'>
          <img className='nav-icon' alt='zz' src={'images/navImage/instagram_icon.png'} />
          <span className='nav-title'>&#x0007C; Westagram</span>
        </div>
        <div className='nav-center'>
          <input className='nav-search' type='text' placeholder='검색' />
        </div>
        <div className='nav-right'>
          <img className='nav-icon' src={'images/navImage/explore_icon.png'} />
          <img className='nav-icon' src={'images/navImage/heart_empty_icon.png'} />
          <img className='nav-icon' src={'images/navImage/profile_icon.png'} />
        </div>
      </nav>
      </div>
);
}

export default Nav;