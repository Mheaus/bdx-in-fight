import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

const HeroBannerContainer = styled.div`
  background: #fff;
  color: #fff;
  height: calc(100% - 4rem);
  max-height: calc(100vh - 4rem);
  overflow: hidden;
  position: relative;
`

const HeroImage = styled(Img)`
  height: 100%;
  width: 100%;
`

const HeroLogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const HeroLogo = styled.img`
  height: 11.75rem;
  padding-bottom: 8rem;
  width: 20.875rem;
`

const HeroBanner = ({ data }) => (
  <HeroBannerContainer>
    <HeroImage
      alt={data.name}
      fadeIn
      fluid={data.heroImage.fluid}
    />
    <HeroLogoContainer>
      <HeroLogo src="/logo-red.png" alt="Bordeaux en luttes - logo red" />
    </HeroLogoContainer>
  </HeroBannerContainer>
)

export { HeroBanner }
