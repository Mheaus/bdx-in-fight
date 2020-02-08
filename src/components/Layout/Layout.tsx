import 'typeface-lato'
import '../base.css'

import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import theme from '../../theme'

import Footer from '../Footer'
import GoogleAnalytics from '../GoogleAnalytics'
import MetaTags from '../MetaTags'
import Navigation from '../navigation'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`

const Layout = props => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <GoogleAnalytics />
      <MetaTags />
      <Container>
        <Navigation />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
