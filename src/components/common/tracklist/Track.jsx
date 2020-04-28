import React from 'react'
import PropTypes from 'prop-types'

const Track = ({track}) => <div className="track">
  <div className="track__title">
    {track.title}
  </div>
  <div className="track__controls">
    <button className="track__control"><i className="fas fa-plus"/> To Queue</button>
    <button className="track__control"><i className="fas fa-play"/> Play</button>
  </div>
</div>

Track.displayName = 'Track'

Track.propTypes = {
  track: PropTypes.object
}

export default Track