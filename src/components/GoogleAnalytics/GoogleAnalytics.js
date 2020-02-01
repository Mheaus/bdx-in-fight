import React from 'react'
import Helmet from 'react-helmet'

const GoogleAnalytics = () => {
  React.useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', 'UA-157194813-1')
  }, [])

  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-157194813-1"
      />
    </Helmet>
  )
}

export default GoogleAnalytics
