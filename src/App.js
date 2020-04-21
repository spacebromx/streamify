import React from 'react'
import Header from './components/header/Header'
import Search from './components/search/Search'
import HomeWidget from './components/home-widget/HomeWidget'
import TopList from './components/topList/TopList'
import Playbar from './components/playbar/Playbar'

import './App.scss'

const App = () => {
  return <div className="App">
      <Header />
      <Search />
      <HomeWidget />
      <HomeWidget />
      <TopList />
      <Playbar />
    </div>
}

export default App