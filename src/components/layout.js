// import { Link } from 'gatsby'
// import Helmet from 'react-helmet'
import React from 'react'

import Container from './container'
import Navigation from './navigation'
import GoogleAnalytics from './GoogleAnalytics'
import MetaTags from './MetaTags'

import './base.css'

const Template = props => {
  const { location, children } = props
  let header

  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <>
      <GoogleAnalytics />
      <MetaTags />
      <Container>
        <Navigation />
        {children}
      </Container>
    </>
  )
}

export default Template
