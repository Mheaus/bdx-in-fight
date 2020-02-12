import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 8rem;
  padding: 2rem;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/">{"< revenir à l'accueil"}</Link>
    </FooterContainer>
  )
}

export default Footer
