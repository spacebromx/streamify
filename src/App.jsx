import React from 'react'
import Header from './components/common/header/Header'
import Search from './components/search/Search'
import HomeWidget from './components/home-widget/HomeWidget'
import TopList from './components/topList/TopList'
import Playbar from './components/common/playbar/Playbar';

import './App.scss'

const App = () => {
  return <main className="App">
    <div className="container">
      <Header />
      <Search />
      <HomeWidget />
      <HomeWidget />
      <TopList />
      <Playbar />
    </div>
    </main>
}

export default App