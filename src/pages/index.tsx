import * as React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'
import uniqBy from 'lodash/uniqBy'

import { ArticlePreview, HeroBanner, Layout, Paper, PromoVideo } from '../components'

const ArticleList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
  @media screen and ${({ theme: { breakpoints } }) =>
    `(min-width: ${breakpoints.small}) and (min-width: ${breakpoints.small})`} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ArticlesSection = styled.div`
  margin: 2rem 2rem 1rem;
`

const SectionHeadline = styled.h2`
  font-size: 1.375rem;
`

const RootIndex: React.FC = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const [indexPage] = get(props, 'data.allContentfulPage.nodes')
  const articles = uniqBy(
    get(props, 'data.allContentfulArticle.edges', []),
    'contentful_id' as unknown as Function // string is a valig shorthand argument for uniqBy
  )

  return (
    <Layout location={props.location}>
      <>
        <Helmet title={siteTitle} />
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
              )
            })}
          </ArticleList>
        </ArticlesSection>
      </>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { name: { eq: "index" } }) {
      nodes {
        title
        heroImage: banner {
          fluid(resizingBehavior: PAD, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
    allContentfulArticle(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(locale: "fr", formatString: "Do MMMM YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
`
