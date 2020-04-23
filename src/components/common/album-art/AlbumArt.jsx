import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import './_AlbumArt.scss'

const AlbumArt = ({image, height, width, title, classModifier, onClick}) => {
  return <div
    className={cx('album-art__picture', classModifier)}
    onClick={onClick}
    style={{
      maxWidth: `${width}px`,
      maxHeight: `${height}px`
    }}
  >
    <img src={image} className="album-art__image" alt={title} />
    <i className="fas fa-play album-art__play-icon" />
  </div>
}

AlbumArt.displayName = 'AlbumArt'

AlbumArt.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string,
  classModifier: PropTypes.string,
  onClick: PropTypes.func
}

AlbumArt.defaultProps = {
  onClick: () => {}
}

export default AlbumArt;