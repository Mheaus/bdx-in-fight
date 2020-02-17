import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

import LayoutContext from '../Layout/context';

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
`;

const Logo = styled.img`
  height: 2rem;
  width: 3.5rem;
`;

const NavigationItem = styled.li`
  align-items: center;
  display: inline-flex;
  margin-left: 1rem;

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
`;

const LinkIcon = styled.a`
  color: #bcbcbc;
  margin-left: 1rem;
  transition: all 0.25s;

  &:hover {
    opacity: 0.75;
  }
`;

const Nav = () => {
  const { media } = React.useContext(LayoutContext);

  return (
    <nav role="navigation">
      <NavContainer>
        <div>
          <Logo src="/logo-red.png" />
          <NavigationItem>
            <Link to="/">Accueil</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/candidats">Candidats</Link>
          </NavigationItem>
        </div>
        {!media.isMobile && (
          <FlexContainer>
            <span>Contactez-nous :</span>
            <LinkIcon href="https://www.facebook.com/BordeauxEnLuttes" target="_blank">
              <FontAwesomeIcon color="#bcbcbc" icon={faFacebookSquare} size="2x" />
            </LinkIcon>
            <LinkIcon href="https://twitter.com/EnLuttes" target="_blank">
              <FontAwesomeIcon color="#bcbcbc" icon={faTwitterSquare} size="2x" />
            </LinkIcon>
            <LinkIcon href="https://www.instagram.com/bordeaux_en_luttes" target="_blank">
              <FontAwesomeIcon color="#bcbcbc" icon={faInstagramSquare} size="2x" />
            </LinkIcon>
          </FlexContainer>
        )}
      </NavContainer>
    </nav>
  );
};

export { Nav };
