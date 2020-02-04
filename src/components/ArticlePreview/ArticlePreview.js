import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './ArticlePreview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="blog-post-preview" fluid={article.heroImage.fluid} />
    <small className={styles.publishDate}>{article.publishDate}</small>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <p
      className={styles.description}
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
  </div>
)
