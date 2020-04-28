import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useQuery} from 'react-query'
import {API_URL} from 'constants'
import {fetchInfo} from 'utils'
import PageLayout from 'components/pages/page-layout/PageLayout'
import Playbar from 'components/common/playbar/Playbar'
import Tracklist from 'components/common/tracklist/Tracklist'

const Artist = () => {
  const {artist} = useParams()
  const fetchData = async () => await fetchInfo(`${API_URL}/artist/${artist}`)
  const fetchTracks = async () => await fetchInfo(`${API_URL}/artist/${artist}/top?limit=15`)
  const {data: artistInfo} = useQuery('artist', fetchData)
  const {data: tracklist} = useQuery('tracklist', fetchTracks)

  return <main className="App">
    {Object.keys((artistInfo).length > 0) ? <PageLayout>
      <div className="column is-4">
        <img src={artistInfo.picture_big} alt={artistInfo.title} className="section__cover"/>
        <div className="section__meta">
          <Link to="/" className="section__back">&larr; Back to home</Link>
        </div>
      </div>
      <div className="column is-offset-1">
        <h1 className="section__title">
          {artistInfo.name}
        </h1>
        {tracklist.total > 0 && <h2 className="section__subtitle">
          Top songs
        </h2>}
        <Tracklist tracks={tracklist.data} />
      </div>
    </PageLayout> : <div className="container" style={{textAlign: 'center'}}>
      <span className="logo__brand">No data found</span>
      <p>The artist ID has not returned any information. Try a different one</p>
      <p>
        <Link to="/" className="section__back">&larr; Back to home</Link>
      </p>
    </div>}
    <Playbar />
  </main>
}

Artist.displayName = 'Artist'

export default Artist
