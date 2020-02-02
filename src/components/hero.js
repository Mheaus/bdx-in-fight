import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

const imgStyle = { margin: '0 -1rem', width: 'calc(100% + 2rem)' }

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
      imgStyle={imgStyle}
    />
  </div>
)
