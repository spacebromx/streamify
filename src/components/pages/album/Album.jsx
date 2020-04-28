import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import {API_URL} from 'constants'
import {fetchInfo} from 'utils'
import PageLayout from 'components/pages/page-layout/PageLayout'
import Playbar from 'components/common/playbar/Playbar'
import Tracklist from 'components/common/tracklist/Tracklist'

const Album = () => {
  const [albumInfo, setAlbumInfo] = useState({})
  const {album} = useParams()

  useEffect(() => {
    (async () => {
      setAlbumInfo(await fetchInfo(`${API_URL}/album/${album}`))
    })()
  }, [])

  return <main className="App">
    {albumInfo?.error?.code === 800
      ? <div className="container" style={{textAlign: 'center'}}>
        <span className="logo__brand">No data found</span>
        <p>The album ID has not returned any information. Try a different one</p>
        <p>
          <Link to="/" className="section__back">&larr; Back to home</Link>
        </p>
      </div>
      : <PageLayout>
        <div className="column is-4">
          <img src={albumInfo?.cover_big} alt={albumInfo?.title} className="section__cover"/>
          <div className="section__meta">
            <div className="section__info">
              <p className="section__name">Rating</p>
              <p className="section__value">{albumInfo?.rating}</p>
            </div>
            <div className="section__info">
              <p className="section__name">Fans</p>
              <p className="section__value">{albumInfo?.fans}</p>
            </div>
            <div className="section__info">
              <p className="section__name">Genre</p>
              <p className="section__value">
                {albumInfo?.genres?.data?.[0]?.name}
              </p>
            </div>
            <div className="section__info">
              <p className="section__name">Release date</p>
              <p className="section__value">{albumInfo?.release_date}</p>
            </div>
            <div className="section__info">
              {albumInfo?.explicit_lyrics && <p><span className="section__explicit">explicit</span></p>}
            </div>
            <Link to="/" className="section__back">&larr; Back to home</Link>
          </div>
        </div>
        <div className="column is-offset-1">
          <h1 className="section__title">
            {albumInfo.title}
          </h1>
          <h2 className="section__subtitle">
            <a href={`/artist/${albumInfo?.artist?.id}`}>{albumInfo?.artist?.name}</a>
          </h2>
          <Tracklist tracks={albumInfo?.tracks?.data} />
        </div>
      </PageLayout>
    }
    <Playbar />
  </main>
}

Album.displayName = 'Album'

export default Album
