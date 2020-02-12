import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

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
        <a href="https://www.facebook.com/BordeauxEnLuttes" target="_blank" noopener>
          <FontAwesomeIcon color="#bcbcbc" icon={faFacebookSquare} size="2x" />
        </a>
      </div>
    </NavContainer>
  </nav>
)

export { Nav }
