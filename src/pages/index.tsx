import * as React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';
import uniqBy from 'lodash/uniqBy';

import { ArticlePreview, HeroBanner, Layout, PromoVideo } from '../components';

const ArticleList = styled.ul`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0 0 8rem;
  padding: 0;

  ${({ theme }) => {
    const { small, large } = theme.breakpoints;

    return `
      @media screen and (max-width: ${small}) {
        grid-template-columns: 1fr;
      }
      @media screen and (min-width: ${small}) and (min-width: ${small}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (min-width: ${large}) {
        grid-template-columns: repeat(3, 1fr);
      }
    `;
  }}
`;

const ArticlesSection = styled.div`
  margin: 2rem 2rem 1rem;
`;

const SectionHeadline = styled.h2`
  font-size: 1.375rem;
`;

const RootIndex: React.FC = props => {
  const indexPage = get(props, 'data.contentfulPage');
  const articles = uniqBy(get(props, 'data.allContentfulArticle.edges', []), ({ node }) => node.contentful_id);

  return (
    <Layout>
      <HeroBanner data={indexPage} />
      <PromoVideo />
      <ArticlesSection>
        <SectionHeadline>Articles</SectionHeadline>
        <ArticleList>
          {articles.map(({ node }) => {
            return (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            );
          })}
        </ArticleList>
      </ArticlesSection>
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(name: { eq: "index" }) {
      title
      heroImage: banner {
        fluid(resizingBehavior: PAD, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulArticle(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          contentful_id
          title
          slug
          publishDate(locale: "fr", formatString: "Do MMMM YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
