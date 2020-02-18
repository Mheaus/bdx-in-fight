import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { useMatch } from '@reach/router';
import styled from 'styled-components';

import { usePortal } from '../../hooks';
import LayoutContext from '../Layout/context';

import { ContactDialog } from './ContactDialog';

const NavContainer = styled.ul`
  background: #fff;
  display: flex;
  height: 4rem;
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

const LinkButton = styled(Link)`
  background: ${({ theme }) => theme.colors.red};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-left: 1.25rem;
  padding: 0.125rem 1.25rem;
`;

const TextButton = styled.button`
  background: unset;
  border: none;
  box-shadow: unset;
  color: currentColor;
  font-size: 1rem;
  font-weight: normal;
  margin: 0 0 0 1rem;
  padding: 0;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    text-decoration: underline;
  }
`;

const DialogContainer = styled.div`
  background: rgba(0, 0, 0, 0.33);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Nav = () => {
  const { media } = React.useContext(LayoutContext);
  const isCurrentPageDonations = useMatch('dons');
  const onOpen = ({ portal }) => {
    portal.current.style.height = 0;
  };
  const { openPortal, closePortal, isOpen, Portal } = usePortal({ onOpen });

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
          {!isCurrentPageDonations && <LinkButton to="/dons">je fais un don</LinkButton>}
        </div>
        {media.isSmall && (
          <TextButton onClick={openPortal} type="button">
            Contact
          </TextButton>
        )}
        {media.isMedium ||
          (media.isLarge && (
            <FlexContainer>
              <span>Contactez-nous :</span>
              <LinkIcon href="mailto://bordeauxenluttes@gmail.com" target="_blank">
                <FontAwesomeIcon color="#bcbcbc" icon={faEnvelopeSquare} size="2x" />
              </LinkIcon>
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
          ))}
        {isOpen && (
          <Portal>
            <DialogContainer>
              <ContactDialog onClose={closePortal} />
            </DialogContainer>
          </Portal>
        )}
      </NavContainer>
    </nav>
  );
};

export { Nav };
