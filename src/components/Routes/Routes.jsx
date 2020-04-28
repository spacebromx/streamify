import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Modal from '../modals/Modal'
import App from '../../App'
import {ReactQueryConfigProvider} from 'react-query'

const Artist = lazy(() => import('components/pages/artist/Artist'))
const Album = lazy(() => import('components/pages/album/Album'))

const queryConfig = {
  suspense: true
}

const loadingModal = <Modal>
  <div className="fa-3x">
    <i className="fas fa-circle-notch fa-spin"/>
    <p className="header__legend">Loading</p>
  </div>
</Modal>

const Routes = () =>
  <Router>
    <ReactQueryConfigProvider config={queryConfig}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/artist/:artist">
          <Suspense fallback={loadingModal}>
            <Artist />
          </Suspense>
        </Route>
        <Route path="/artist">
          <Redirect to="/"/>
        </Route>
        <Route path="/album/:album">
          <Suspense fallback={loadingModal}>
            <Album />
          </Suspense>
        </Route>
        <Route path="/album">
          <Redirect to="/"/>
        </Route>
        <Route path="*">
          <div>Error 404</div>
        </Route>
      </Switch>
    </ReactQueryConfigProvider>
  </Router>

export default Routes
