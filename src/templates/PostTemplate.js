import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import media from 'utils/media';
import theme from 'utils/theme';
import GlobalStyle from 'components/GlobalStyle';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { graphql } from 'gatsby';

const Header = styled.header`
  margin-top: 90px;
  text-align: center;
  font-size: 20px;
  padding: 0 20px;

  ${media.medium`
      font-size: 24px;
      width: 70%;
      margin: 90px auto 0 auto;
  `}

  ${media.big`
      font-size: 30px;
  `}
`;

const Article = styled.article`
  padding: ${theme.padding.normal};

  ${media.small`
      padding: ${theme.padding.medium};
      font-size: 18px;
      width: 80%;
      margin: auto;
  `}

  ${media.big`
      padding: ${theme.padding.big};
      font-size: 20px;
      width: 75%;
  `}
`;

const ServicePageTemplate = ({ pageContext, data: { datoCmsPost } }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar />
      <Header>
        <h1>{pageContext.heading}</h1>
      </Header>
      <Hero isPost image={datoCmsPost.hero} />
      <HelmetDatoCms seo={datoCmsPost.seoMetaTags} />
      <Article
        dangerouslySetInnerHTML={{
          __html: pageContext.content.childMarkdownRemark.html,
        }}
      />
      <Footer />
    </>
  </ThemeProvider>
);

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
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
