import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AlbumArt from "../common/album-art/AlbumArt";

import './_FeaturedWidget.scss'

const FeaturedWidget = ({header, title, image, description, artist, year, genre, isRadio}) =>
  <div className="featured-widget">
    {header && <div className="featured-widget__header">{header}</div>}
    <div className="featured-widget__content">
      <AlbumArt width={140} height={140} image={image} />
      <div className="featured-widget__meta">
        <h2 className={cx('featured-widget__title', {'featured-widget__title--radio': isRadio})}>{title}</h2>
        <p className="featured-widget__description">{isRadio ? description : artist}</p>
        {!isRadio && <div className="featured-widget__bottom">
          <p className="featured-widget__meta-item">Year: {year}</p>
          <p className="featured-widget__meta-item">Genre: {genre}</p>
          <p className="featured-widget__meta-item">
            <a href="#">
              <i className="fas fa-plus-circle" /> Add to Playlist
            </a>
          </p>
        </div>}
      </div>
    </div>
  </div>

FeaturedWidget.propTypes = {
  header: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
  isRadio: PropTypes.bool
}

FeaturedWidget.defaultProps = {
  isRadio: false
}

export default FeaturedWidget