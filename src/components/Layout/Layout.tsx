import 'typeface-lato';
import './global.css';

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import get from 'lodash/get';

import { useMedia } from '../../hooks';
import theme from '../../theme';

import GoogleAnalytics from '../GoogleAnalytics';
import MetaTags from '../MetaTags';
import Nav from '../Nav';

import { LayoutContextProvider } from './context';
import GlobalStyle from './GlobalStyle';

const siteQuery = graphql`
  query DonationQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

function useMediaQueries() {
  const { small, medium, large } = theme.breakpoints;

  const isMobile = useMedia(`(max-width: ${small})`);
  const isSmall = useMedia(`(max-width: ${medium})`);
  const isMedium = useMedia(`(min-width: ${medium}) and (max-width: ${large})`);
  const isLarge = useMedia(`(min-width: ${large})`);

  return { isMobile, isSmall, isMedium, isLarge };
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = props => {
  const { children } = props;
  const mediaQueryContextValue = useMediaQueries();
  const siteTitle = get(useStaticQuery(siteQuery), 'data.site.siteMetadata.title');

  const contextValue = {
    media: mediaQueryContextValue,
  };

  return (
    <LayoutContextProvider value={contextValue}>
      <ThemeProvider theme={theme}>
        <Helmet title={siteTitle} />
        <GoogleAnalytics />
        <MetaTags />
        <GlobalStyle />
        <Container>
          <Nav />
          {children}
        </Container>
      </ThemeProvider>
    </LayoutContextProvider>
  );
};

export default Layout;
