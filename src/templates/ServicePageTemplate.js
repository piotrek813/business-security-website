import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import MainTemplate from 'templates/MainTemplate';

const Article = styled.article`
  width: 70%;
  margin: auto;

  padding: ${({ theme }) => theme.padding.normal};

  ${media.medium`
      padding: ${({ theme }) => theme.padding.medium};
      font-size: 18px;
  `}

  ${media.big`
      padding: ${({ theme }) => theme.padding.big};
      font-size: 20px;
  `}
`;

const ServicePageTemplate = ({ pageContext }) => (
  <MainTemplate hero={{ heading: pageContext.heading, paragraph: '' }}>
    <Article
      dangerouslySetInnerHTML={{
        __html: pageContext.content.childMarkdownRemark.html,
      }}
    />
  </MainTemplate>
);

ServicePageTemplate.propTypes = {
  pageContext: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

export default ServicePageTemplate;
