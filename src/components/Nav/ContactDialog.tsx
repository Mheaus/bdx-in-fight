import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

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

export { ContactDialog };
