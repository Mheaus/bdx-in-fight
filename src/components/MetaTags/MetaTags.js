import React from 'react'
import Helmet from 'react-helmet'

const MetaTags = () => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>Bordeaux en luttes</title>
      <meta name="title" content="Bordeaux en luttes" />
      <meta
        name="description"
        content="Site de Bordeaux en Luttes 2020.
            Les 15 et 22 mars prochain, je vote Bordeaux en Luttes, la liste des luttes.
            Poutou  Social Justice Manifestation Gilet jaune Précarité Gauche Combat
            "
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />>
      <meta property="og:url" content="https://bordeaux-en-luttes.fr/" />
      <meta property="og:title" content="Bordeaux en luttes" />
      <meta
        property="og:description"
        content="Site de Bordeaux en Luttes 2020.
            Les 15 et 22 mars prochain, je vote Bordeaux en Luttes, la liste des luttes.
            Poutou  Social Justice Manifestation Gilet jaune Précarité Gauche Combat
            "
      />
      {/* <!-- Twitter --> */}
      <meta property="og:image" content="" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bordeaux-en-luttes.fr/" />
      <meta property="twitter:title" content="Bordeaux en luttes" />
      <meta
        property="twitter:description"
        content="Site de Bordeaux en Luttes 2020.
            Les 15 et 22 mars prochain, je vote Bordeaux en Luttes, la liste des luttes.
            Poutou  Social Justice Manifestation Gilet jaune Précarité Gauche Combat
            "
      />
      <meta property="twitter:image" content=""></meta>
    </Helmet>
  )
}

export default MetaTags
