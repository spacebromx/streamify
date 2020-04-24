import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import App from '../../App'

const Routes = () =>
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/artist/:artist">
        <div>Artist</div>
      </Route>
      <Route path="/artist">
        <Redirect to="/"/>
      </Route>
      <Route path="/album/:album">
        <div>Album</div>
      </Route>
      <Route path="/album">
        <Redirect to="/"/>
      </Route>
      <Route path="/genre/:genre">
        <div>Genre</div>
      </Route>
      <Route path="/genre">
        <Redirect to="/"/>
      </Route>
      <Route path="*">
        <div>Error 404</div>
      </Route>
    </Switch>
  </Router>

export default Routes
