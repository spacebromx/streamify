import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes/Routes'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Routes/>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
