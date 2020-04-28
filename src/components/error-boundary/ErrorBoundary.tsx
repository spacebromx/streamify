import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if(this.state.errorInfo) {
      return <div>
        Something went wrong
      </div>
    }

    return this.props.children
  }
}

export default ErrorBoundary
