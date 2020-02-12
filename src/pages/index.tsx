import * as React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { ArticlePreview, HeroBanner, Layout, Paper } from '../components'

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

const VideoContainer = styled(Paper)`
  display: flex;
  justify-content: space-between;
  margin: 2rem 2rem -4rem;
  transform: translateY(-4rem);
`

const VideoPromoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  justify-content: space-between;
  padding: 2rem 4rem 2rem 0;

  a {
    display: block;
    margin-top: 1rem;
  }
`

const Video = styled.video`
  border-radius: 0.5rem;
  width: 62.5%;
`

const ArticlesSection = styled.div`
  margin: 2rem 2rem 1rem;
`

const SectionHeadline = styled.h2`
  font-size: 1.375rem;
`

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [indexPage] = get(this, 'props.data.allContentfulPage.nodes')
    const heroVideoUrl = get(this, 'props.data.heroVideo.file.url')
    const heroVideoPosterUrl = get(this, 'props.data.heroVideoPoster.file.url')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <>
          <Helmet title={siteTitle} />
          <HeroBanner data={indexPage} />
          <VideoContainer>
            <VideoPromoContainer>
              <p>
                Les 15 et 22 mars prochain, je vote Bordeaux en Luttes, la liste
                des luttes.
              </p>
              <div>
                {/* <Link>consulter le programme</Link> */}
                {/* <Link>voir la liste des candidats</Link> */}
              </div>
            </VideoPromoContainer>
            <Video controls poster={heroVideoPosterUrl} src={heroVideoUrl}>
              sorry your browser doesn't support embedded videos.
            </Video>
          </VideoContainer>
          <ArticlesSection>
            <SectionHeadline>Articles</SectionHeadline>
            <ArticleList>
              {posts.map(({ node }) => {
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
    heroVideo: contentfulAsset(
      contentful_id: { eq: "2QCfv4eaHJUCG5O8XyxYfc" }
    ) {
      file {
        url
      }
    }
    heroVideoPoster: contentfulAsset(
      contentful_id: { eq: "SU5QDcAMhrY2AW2b4SfEg" }
    ) {
      file {
        url
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
  }
`
