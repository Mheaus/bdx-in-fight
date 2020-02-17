import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';

import Paper from '../Paper';

const VideoContainer = styled(Paper)`
  display: flex;
  justify-content: space-between;
  margin: 2rem 2rem -4rem;
  transform: translateY(-4rem);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column-reverse;
  }
`;

const VideoPromoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 2rem 4rem 2rem 0;
  }

  a {
    display: block;
    margin-top: 1rem;
  }
`;

const Video = styled.video`
  border-radius: 0.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 62.5%;
  }
`;

const promoVideoQuery = graphql`
  query PromoVideoQuery {
    video: contentfulAsset(contentful_id: { eq: "2QCfv4eaHJUCG5O8XyxYfc" }) {
      file {
        url
      }
    }
    poster: contentfulAsset(contentful_id: { eq: "SU5QDcAMhrY2AW2b4SfEg" }) {
      file {
        url
      }
    }
  }
`;

const PromoVideo: React.FC<{}> = () => {
  const data = useStaticQuery(promoVideoQuery);
  const videoUrl = get(data, 'video.file.url');
  const posterUrl = get(data, 'poster.file.url');

  return (
    <VideoContainer>
      <VideoPromoContainer>
        <p>Les 15 et 22 mars prochain, je vote Bordeaux en Luttes, la liste des luttes.</p>
        <div>
          {/* <Link>consulter le programme</Link> */}
          <Link to="/candidats">voir la liste des candidats</Link>
        </div>
      </VideoPromoContainer>
      <Video controls poster={posterUrl} src={videoUrl}>
        sorry your browser doesn&apos;t support embedded videos.
      </Video>
    </VideoContainer>
  );
};

export { PromoVideo };
