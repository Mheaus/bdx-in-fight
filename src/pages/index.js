import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import React from 'react'
import styled from 'styled-components'

import { ArticlePreview, HeroBanner, Layout } from '../components'

const ArticleList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;

  ${console.log}

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

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [indexPage] = get(this, 'props.data.allContentfulPage.nodes')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <HeroBanner data={indexPage} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ArticleList>
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ArticleList>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
  }
`
