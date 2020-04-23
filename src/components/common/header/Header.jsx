import React from 'react';
import './_Header.scss'
import imageLogo from 'assets/compact-disc-solid.png'

const Header = () => {
  return <header className="header">
    <div className="logo">
      <img className="logo__icon" src={imageLogo} alt="logo streamify"/>
      <span className="logo__brand">Streamify</span>
    </div>
    <p className="header__legend">We have over 2,000 songs, ready for you. Search, play and enjoy. <br/> Start typing
      and search through our catalog</p>
  </header>
}

export default Header;