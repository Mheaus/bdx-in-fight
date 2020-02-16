import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';

import { Layout } from '../components';

const pageQuery = graphql`
  query DonationsQuery {
    contentfulPage(name: { eq: "donations" }) {
      title
      heroImage: banner {
        fluid(resizingBehavior: PAD, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;

const Donations: React.FC = () => {
  const donationPage = get(useStaticQuery(pageQuery), 'data.contentfulPage');

  return (
    <Layout>
      <div />
    </Layout>
  );
};

export default Donations;
