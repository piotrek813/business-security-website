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
import Img from 'gatsby-image';

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

const StyledImg = styled(Img)`
  max-width: 100%;
  max-height: 250px;
  margin: 10px 0;

  ${media.medium`
      max-height: 400px;
  `}

  ${media.big`
      max-height: 550px;
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
      <Article>
        {datoCmsPost.content.map((item) => (
          <React.Fragment key={item.id}>
            {item.model.apiKey === 'text' && (
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: item.textNode.childMarkdownRemark.html,
                }}
              />
            )}
            {item.model.apiKey === 'image' && <StyledImg {...item.image} />}
          </React.Fragment>
        ))}
      </Article>
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
      content {
        ... on DatoCmsText {
          id
          model {
            apiKey
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsImage {
          id
          model {
            apiKey
          }
          image {
            fixed(width: 900, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFixed_noBase64
            }
          }
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
