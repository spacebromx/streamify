import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import App from '../../App'
import Album from 'components/pages/album/Album'
import Artist from 'components/pages/artist/Artist'

const Routes = () =>
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/artist/:artist">
        <Artist />
      </Route>
      <Route path="/artist">
        <Redirect to="/"/>
      </Route>
      <Route path="/album/:album">
        <Album />
      </Route>
      <Route path="/album">
        <Redirect to="/"/>
      </Route>
      <Route path="*">
        <div>Error 404</div>
      </Route>
    </Switch>
  </Router>

export default Routes
