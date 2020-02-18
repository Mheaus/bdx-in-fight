import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import uniqBy from 'lodash/uniqBy';
import styled from 'styled-components';

import { Layout } from '../components';

const CandidatsContainer = styled.div`
  margin: 1.5rem 1.5rem 8rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
`;

const ListContainer = styled.div`
  column-gap: 1.5rem;

  ${({ theme }) => {
    const { medium, large, small } = theme.breakpoints;

    return `
      @media screen and (max-width: ${small}) {
        column-count: 1;
      }
      @media screen and (min-width: ${small}) and (max-width: ${medium}) {
        column-count: 2;
      }
      @media screen and (min-width: ${medium}) and (max-width: ${large}) {
        column-count: 3;
      }
      @media screen and (min-width: ${large}) {
        column-count: 4;
      }
    `;
  }}
`;

const ItemContainer = styled.div`
  background: #fff;
  border-radius: 0.25rem;
  ${({ theme }) => theme.shadows['2pt']}
  display: inline-block;
  margin: 0.5rem 0;
  overflow: hidden;
`;

const Avatar = styled(Img)`
  height: 20rem;
`;

const DetailsContainer = styled.div`
  padding: 1rem;
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
  padding: 0;
`;

const pageQuery = graphql`
  query CandidatsPageQuery {
    contentfulPage(name: { eq: "candidats" }) {
      title
    }
    allContentfulCandidat(sort: { fields: createdAt, order: ASC }) {
      nodes {
        age
        contentful_id
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
        shortBio {
          childMarkdownRemark {
            html
          }
        }
        title
      }
    }
  }
`;

const Candidats: React.FC = () => {
  const data = useStaticQuery(pageQuery);
  const candidats = uniqBy(get(data, 'allContentfulCandidat.nodes'), 'contentful_id');

  return (
    <Layout>
      <CandidatsContainer>
        <PageTitle>Candidats</PageTitle>
        <ListContainer>
          {candidats.map(({ age, id, image, name, shortBio, title }) => (
            <ItemContainer key={id}>
              {image && <Avatar fluid={image.fluid} />}
              <DetailsContainer>
                <Name>{name}</Name>
                <small>
                  {age} ans, {title}
                </small>
                <div
                  dangerouslySetInnerHTML={{
                    __html: shortBio.childMarkdownRemark.html,
                  }}
                />
              </DetailsContainer>
            </ItemContainer>
          ))}
        </ListContainer>
      </CandidatsContainer>
    </Layout>
  );
};

export default Candidats;
