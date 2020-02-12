import 'typeface-lato'

import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import theme from '../../theme'

import GoogleAnalytics from '../GoogleAnalytics'
import MetaTags from '../MetaTags'
import Nav from '../Nav'

import GlobalStyle from './GlobalStyle'

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
      <GlobalStyle />
      <Container>
        <Nav />
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default Layout
