import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/common/header/Header'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return <main className="App">
        <div className="container">
          <Header
            title="Oops, something went wrong"
            subtitle="The following error has happened:" />
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <a href="/" className="section__back" style={{textAlign: 'center', display: 'block', marginTop: '4rem'}}>&larr; Go back to home</a>
        </div>
      </main>
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object
}

export default ErrorBoundary