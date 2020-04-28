import React from 'react';
import PropTypes from 'prop-types'
import imageLogo from 'assets/compact-disc-solid.png'

import './_Header.scss'

const Header = ({title, subtitle}) => {
  return <header className="header">
    <div className="logo">
      <img className="logo__icon" src={imageLogo} alt="logo streamify"/>
      <span className="logo__brand">{title}</span>
    </div>
    <p className="header__legend" dangerouslySetInnerHTML={{__html: subtitle}} />
  </header>
}

Header.displayName = 'Header'

Header.defaultProps = {
  title: 'Streamify',
  subtitle: 'We have over 2,000 songs, ready for you. Search, play and enjoy. <br/> Start typing and search through our catalog'
}

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default Header;