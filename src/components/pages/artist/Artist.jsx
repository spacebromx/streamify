import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {API_URL} from 'constants'
import {fetchInfo} from 'utils'
import PageLayout from 'components/pages/page-layout/PageLayout'
import Playbar from 'components/common/playbar/Playbar'
import Tracklist from 'components/common/tracklist/Tracklist'

const Artist = () => {
  const [artistInfo, setArtistInfo] = useState({})
  const [tracklist, setTracklist] = useState([])
  const {artist} = useParams()

  useEffect(() => {
    (async () => {
      setArtistInfo(await fetchInfo(`${API_URL}/artist/${artist}`))
      setTracklist(await fetchInfo(`${API_URL}/artist/${artist}/top?limit=15`))
    })();

  }, [])


  return <main className="App">
    {artistInfo?.error?.code === 800
      ? <div className="container" style={{textAlign: 'center'}}>
        <span className="logo__brand">No data found</span>
        <p>The artist ID has not returned any information. Try a different one</p>
        <p>
          <Link to="/" className="section__back">&larr; Back to home</Link>
        </p>
      </div>
      : <Fragment>
        <PageLayout>
          <div className="column is-4">
            <img src={artistInfo?.picture_big} alt={artistInfo?.title} className="section__cover"/>
            <div className="section__meta">
              <Link to="/" className="section__back">&larr; Back to home</Link>
            </div>
          </div>
          <div className="column is-offset-1">
            <h1 className="section__title">
              {artistInfo.name}
            </h1>
            {tracklist?.data?.length > 0 && <h2 className="section__subtitle">
              Top songs
            </h2>}
            <Tracklist tracks={tracklist?.data} />
          </div>
        </PageLayout>
      </Fragment>
    }
    <Playbar />
  </main>
}

Artist.displayName = 'Artist'

export default Artist
