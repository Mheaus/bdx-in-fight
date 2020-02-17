import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { faTimes, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

import { usePortal } from '../../hooks';
import LayoutContext from '../Layout/context';
import Paper from '../Paper';

const DialogPaper = styled(Paper)`
  height: 18rem;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  width: 24rem;
`;

const Title = styled.p`
  margin: 0 0 0.5rem;
`;

const CloseButton = styled.button`
  border: none;
  position: absolute;
  opacity: 0.85;
  right: 2rem;
  top: 2rem;
  transition: all 0.15s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-gap: 2rem 0.5rem;
  padding: 1.5rem 0;

  ${({ theme }) => {
    const { small } = theme.breakpoints;

    return `
      @media screen and (max-width: ${small}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (min-width: ${small}) {
        grid-template-columns: repeat(4, 1fr);
      }
    `;
  }}
`;

const ContactItem = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.85;
  transition: all 0.15s;

  &:hover {
    opacity: 1;
  }
`;

const ContactDialog = ({ onClose }) => {
  return (
    <DialogPaper>
      <Title>Contactez-nous :</Title>
      <CloseButton onClick={onClose} type="button">
        <FontAwesomeIcon color="#bcbcbc" icon={faTimes} size="2x" />
      </CloseButton>
      <ListContainer>
        <ContactItem href="mailto://bordeauxenluttes@gmail.com" target="_blank">
          <FontAwesomeIcon color="#4d4d4d" icon={faEnvelopeSquare} size="2x" />
          <span>mail</span>
        </ContactItem>
        <ContactItem href="https://www.facebook.com/BordeauxEnLuttes" target="_blank">
          <FontAwesomeIcon color="#4d4d4d" icon={faFacebookSquare} size="2x" />
          <span>facebook</span>
        </ContactItem>
        <ContactItem href="https://twitter.com/EnLuttes" target="_blank">
          <FontAwesomeIcon color="#4d4d4d" icon={faTwitterSquare} size="2x" />
          <span>twitter</span>
        </ContactItem>
        <ContactItem href="https://www.instagram.com/bordeaux_en_luttes" target="_blank">
          <FontAwesomeIcon color="#4d4d4d" icon={faInstagramSquare} size="2x" />
          <span>instagram</span>
        </ContactItem>
      </ListContainer>
    </DialogPaper>
  );
};

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

const TextButton = styled.button`
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
        </div>
        {media.isSmall ? (
          <TextButton onClick={openPortal} type="button">
            Contact
          </TextButton>
        ) : (
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
        )}
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
