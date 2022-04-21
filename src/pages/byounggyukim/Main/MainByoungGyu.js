import React from 'react';
import './MainByoungGyu.scss';
import Feed from './Feed';
import Aside from './Aside/AsideByoungGyu';

function Main() {
  return (
    <div className="inline">
      <Feed />
      <Aside />
    </div>
  );
}

export default Main;
