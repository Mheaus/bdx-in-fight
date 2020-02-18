const random = require('lodash/random');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the access token need to be provided.');
}

module.exports = {
  siteMetadata: {
    title: 'Bordeaux en luttes',
    siteUrl: `https://bordeaux-en-luttes.fr`,
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: ['#26ac9e', '#5822f6', '#f05151', '#f9ea50'][random(0, 3)],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
