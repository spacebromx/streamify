import React from 'react'
import PropTypes from 'prop-types'
import Song from '../song/Song'
import './_TopList.scss'

const TopList = ({ genre }) => {
  return <div className="top-list">
    <div className="top-list__header">
      <h2>Top {genre}</h2>
    </div>
    <div className="top-list__content">
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
      <Song
        artist="Ikimonogakari"
        title="Hanabi"
        image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
      />
    </div>
  </div>
}

TopList.propTypes = {
  genre: PropTypes.string.isRequired
}

export default TopList
