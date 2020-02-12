import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const NavContainer = styled.ul`
  background: #fff;
  display: flex;
  height: calc(4rem - 2rem);
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 1rem 1.5rem;

  & > div {
    display: flex;
  }
`

const Logo = styled.img`
  height: 2rem;
  width: 3.5rem;
`

const NavigationItem = styled.li`
  align-items: center;
  display: inline-flex;
  margin: 0 1rem;

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const LinkIcon = styled.a`
  color: #bcbcbc;
  margin-left: 1.5rem;
  transition: all 0.25s;

  &:hover {
    opacity: 0.75;
  }
`

const Nav = () => (
  <nav role="navigation">
    <NavContainer>
      <div>
        <Logo src="/logo-red.png" />
        <NavigationItem>
          <Link to="/">Accueil</Link>
        </NavigationItem>
      </div>
      <div>
        <LinkIcon href="https://www.facebook.com/BordeauxEnLuttes" target="_blank">
          <FontAwesomeIcon color="#bcbcbc" icon={faFacebookSquare} size="2x" />
        </LinkIcon>
        <LinkIcon href="https://twitter.com/EnLuttes" target="_blank">
          <FontAwesomeIcon color="#bcbcbc" icon={faTwitterSquare} size="2x" />
        </LinkIcon>
      </div>
    </NavContainer>
  </nav>
)

export { Nav }
