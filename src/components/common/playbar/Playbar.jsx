import React from 'react';

import './_Playbar.scss'

const Playbar = () => {
  return <div className="playbar">
    <div className="container playbar__container">
      <div className="playbar__picture">
        <img src="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg" className="playbar__image" alt=""/>
        <i className="fas fa-play playbar__play-icon" />
      </div>
      <div className="playbar__meta">
        <div className="playbar__info">
          <div className="playbar__song">Hanabi</div>
          <div className="playbar__artist">Ikimonogakari</div>
        </div>
        <div className="playbar__controls">
          <button className="playbar__control">
            <i className="fas fa-backward"/>
          </button>
          <button className="playbar__control">
            <i className="fas fa-play"/>
          </button>
          <button className="playbar__control">
            <i className="fas fa-forward"/>
          </button>
        </div>
      </div>
    </div>
  </div>
}

export default Playbar;