import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import media from 'utils/media';
import MainTemplate from 'templates/MainTemplate';
import { graphql } from 'gatsby';

const Article = styled.article`
  padding: ${({ theme }) => theme.padding.normal};

  ${media.small`
      padding: ${({ theme }) => theme.padding.medium};
      font-size: 18px;
      width: 80%;
      margin: auto;
  `}

  ${media.big`
      padding: ${({ theme }) => theme.padding.big};
      font-size: 20px;
      width: 75%;
  `}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0 7px 0;
  }

  ul,
  ol {
    margin: 0 0 7px 0;
  }
`;

const ServicePageTemplate = ({ pageContext, data: { datoCmsService } }) => (
  <MainTemplate hero={{ heading: pageContext.heading, paragraph: '' }}>
    <HelmetDatoCms seo={datoCmsService.seoMetaTags} />
    <Article
      dangerouslySetInnerHTML={{
        __html: pageContext.content.childMarkdownRemark.html,
      }}
    />
  </MainTemplate>
);

export const query = graphql`
  query ServiceQuery($slug: String!) {
    datoCmsService(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

ServicePageTemplate.propTypes = {
  pageContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ServicePageTemplate;
