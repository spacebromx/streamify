import React from 'react'
import Header from './components/common/header/Header'
import Search from './components/search/Search'
import FeaturedWidget from './components/featured-widget/FeaturedWidget'
import TopList from './components/topList/TopList'
import Playbar from './components/common/playbar/Playbar';

import './App.scss'
import 'bulma/css/bulma.css'

const App = () => {
  return <main className="App">
    <div className="container">
      <Header />
      <Search />
      <div className="columns is-variable is-6">
        <div className="column">
          <FeaturedWidget
            artist="Ikimonogakari"
            title="Hanabi"
            header="Song of the Day"
            year="2008"
            genre="jPop"
            image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
          />
        </div>
        <div className="column">
          <FeaturedWidget
            description="This is a random description"
            title="jPop Station"
            header="Random Station"
            image="https://e-cdns-images.dzcdn.net/images/cover/62b9652a2e8e95a6d63fd2fa2a3f6562/264x264-000000-80-0-0.jpg"
            isRadio
          />
        </div>
      </div>
      <TopList />
    </div>
    <Playbar />
  </main>
}

export default App