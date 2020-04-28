import React from 'react'
import PropTypes from 'prop-types'
import './_Song.scss'
import AlbumArt from '../common/album-art/AlbumArt'

const Song = ({ image, title, artist }) => {
  return <div className="song">
    <div className="song__content">
      <AlbumArt width={35} height={35} image={image} />
      <div className="song__meta">
        <h2 className="song__title">{title}</h2>
        <p className="song__artist">{artist}</p>
      </div>
    </div>
  </div>
}

Song.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
}

export default Song
