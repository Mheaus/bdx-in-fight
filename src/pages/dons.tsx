import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';

import { Layout, Paper } from '../components';

const DonationsContainer = styled.div`
  ${({ theme }) => {
    const { medium } = theme.breakpoints;

    return `
      @media screen and (max-width: ${medium}) {
        margin: 2rem 1rem 4rem;
      }
      @media screen and (min-width: ${medium}) {
        margin: 2rem 4rem 4rem;
      }
    `;
  }}
`;

const InstructionsContainer = styled(Paper)`
  margin: 0 0 2rem;

  a {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const AddressContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
`;

const ButtonDownload = styled.button`
  background: ${({ theme }) => theme.colors.purple};
  border: none;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  ${({ theme }) => theme.shadows['2pt']};
  color: ${({ theme }) => theme.colors.white};
  display: block;
  margin: 2rem auto 1rem;
  padding: 0.5rem 1.5rem;
  transition: all 0.15s;

  &:hover {
    ${({ theme }) => theme.shadows['3pt']};
  }
`;

const LegalMentions = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.875rem;
`;

const pageQuery = graphql`
  query DonationsQuery {
    contentfulPage(name: { eq: "donations" }) {
      title
      heroImage: banner {
        fluid(resizingBehavior: PAD, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;

const Donations: React.FC = () => {
  const donationPage = get(useStaticQuery(pageQuery), 'data.contentfulPage');

  return (
    <Layout>
      <DonationsContainer>
        <InstructionsContainer>
          <h1>
            Faire un don à <b>Bordeaux en Luttes</b>
          </h1>
          <p>
            Conformément à l&apos;article L58-2 du code électoral (publié ci-dessous), vous pouvez soutenir
            financièrement la liste Bordeaux en luttes emmenée par Philippe Poutou en adressant vos dons à son
            mandataire financier, seule personne habilitée à recueillir des dons de personnes physiques pour le candidat
            selon la déclaration en préfecture du 27 janvier 2020.
          </p>
          <h3>
            Par <b>chèque</b> à l’adresse suivante :
          </h3>
          <AddressContainer>
            Véronique Oliveros
            <br />
            Mandataire financier de Bordeaux en luttes
            <br />
            110 rue de Bègles 33800 Bordeaux
          </AddressContainer>
          <h3>
            Par <b>virement ou prélèvement</b> en prenant contact à l’adresse mail suivante :<br />
          </h3>
          <a href="mailto://mandataire.bordeauxenluttes@gmail.com">mandataire.bordeauxenluttes@gmail.com</a>
          <br />
          <p>Si vous êtes imposable, vos dons, par chèque, virement ou prélèvement, sont défiscalisés à 66 % :</p>
          <ul>
            <li>
              un don de 100 € ne vous coûtera, après déduction fiscale, <b>que 34 € ;</b>
            </li>
            <li>
              un don de 50 € ne vous coûtera, après déduction fiscale, <b>que 17 €.</b>
            </li>
          </ul>
          <p>
            <b>Les dons en espèces ne peuvent dépasser 150 € et ne donnent pas lieu à déduction fiscale.</b>
          </p>
          <p>
            Accompagnez votre envoi du formulaire ci-dessous à renseigner et signer. Vous recevrez un reçu officiel vous
            donnant droit à la déduction fiscale. Seules les personnes physiques sont habilitées à faire un don. Les
            dons de personnes morales (entreprises, associations ...) sont strictement interdits.
          </p>
          <ButtonDownload>
            Télécharger le formulaire <FontAwesomeIcon icon={faFileDownload} />
          </ButtonDownload>
        </InstructionsContainer>
        <LegalMentions>
          <p>
            Code électoral, Article L52-8 (modifié par Loi n°2005-1719 du 30 décembre 2005 - art. 5 JORF 31 décembre
            2005)
          </p>
          <p>
            Les dons consentis par une personne physique dûment identifiée pour le financement de la campagne d&apos;un
            ou plusieurs candidats lors des mêmes élections ne peuvent excéder 4 600 euros.
            <br /> Les personnes morales, à l&apos;exception des partis ou groupements politiques, ne peuvent participer
            au financement de la campagne électorale d&apos;un candidat, ni en lui consentant des dons sous quelque
            forme que ce soit, ni en lui fournissant des biens, services ou autres avantages directs ou indirects à des
            prix inférieurs à ceux qui sont habituellement pratiqués. Tout don de plus de 150 euros consenti à un
            candidat en vue de sa campagne doit être versé par chèque, virement, prélèvement automatique ou carte
            bancaire. Le montant global des dons en espèces faits au candidat ne peut excéder 20 % du montant des
            dépenses autorisées lorsque ce montant est égal ou supérieur à 15 000 euros en application de l&apos;article
            L. 52-11. Aucun candidat ne peut recevoir, directement ou indirectement, pour quelque dépense que ce soit,
            des contributions ou aides matérielles d&apos;un Etat étranger ou d&apos;une personne morale de droit
            étranger. Par dérogation au premier alinéa de l&apos;article L. 52-1, les candidats ou les listes de
            candidats peuvent recourir à la publicité par voie de presse pour solliciter les dons autorisés par le
            présent article. La publicité ne peut contenir d&apos;autres mentions que celles propres à permettre le
            opres à permettre le versement du don.
            <br />
          </p>
        </LegalMentions>
      </DonationsContainer>
    </Layout>
  );
};

export default Donations;
