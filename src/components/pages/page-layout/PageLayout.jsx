import React from 'react'
import PropTypes from 'prop-types'

import './_PageLayout.scss'

const PageLayout = ({children}) => {
  return <div className="container section">
    <div className="columns">
      {children}
    </div>
  </div>
}

PageLayout.displayName = 'PageLayout'

PageLayout.propTypes = {
  children: PropTypes.array
}

export default PageLayout