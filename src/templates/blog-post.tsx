import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import get from 'lodash/get'
import styled from 'styled-components'

import { Layout, Paper } from '../components'

const MainContainer = styled(Paper)`
  margin: 2rem 2rem -8rem;
  transform: translateY(-8rem);
`

const ImgContainer = styled.div`
  height: 66%;
  max-height: 66vh;
  overflow: hidden;
`

const Footer = styled.div`
  margin: 2rem;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <ImgContainer>
            <Img alt={post.title} fadeIn fluid={post.heroImage.fluid} />
          </ImgContainer>
          <MainContainer>
            <h1 className="section-headline">{post.title}</h1>
            <small style={{ display: 'block' }}>{post.publishDate}</small>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </MainContainer>
          <Footer>
            <Link to="/">{"< revenir à l'accueil"}</Link>
          </Footer>
        </>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "Do MMMM YYYY", locale: "fr")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
