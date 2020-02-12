import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ArticlePreviewContainer = styled.div`
  display: block;
`

const Title = styled.h3`
  font-size: 1.25em;
  line-height: 1.625rem;
  margin: 0.25rem 0 0.5rem;
`

const PublishDate = styled.small`
  color: #a0a0a0;
`

const Description = styled.p`
  line-height: 1.375rem;
`

const Tag = styled.p`
  color: #a0a0a0;
  text-decoration: none;
  display: inline-block;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #a0a0a0;
  margin-right: 0.5em;
`

export default ({ article }) => (
  <ArticlePreviewContainer>
    <Img alt="blog-post-preview" fluid={article.heroImage.fluid} />
    <PublishDate>{article.publishDate}</PublishDate>
    <Title>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </Title>
    <Description
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {/* {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))} */}
  </ArticlePreviewContainer>
)
