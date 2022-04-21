import React from 'react';
import AsideJaeWon from './Aside/AsideJaeWon';
import FeedJaeWon from './Feed/FeedJaeWon';
import './MainJaeWon.scss';

function MainJaeWon() {
  return (
    <div className="MainJaeWon">
      <div className="main">
        <div className="feed">
          <FeedJaeWon />
        </div>
        <AsideJaeWon />
      </div>
    </div>
  );
}

export default MainJaeWon;
