import React from 'react'
import PropTypes from 'prop-types'
import Track from './Track'

import './_Tracklist.scss'

const Tracklist = ({tracks}) => {
  return tracks && tracks.length > 0 ? <div className="tracklist">
    {tracks.map(track => <Track track={track} key={track.id}/>)}
  </div> : <div>Loading...</div>
}

Tracklist.displayName = 'Tracklist'

Tracklist.propTypes = {
  tracks: PropTypes.array
}

export default Tracklist