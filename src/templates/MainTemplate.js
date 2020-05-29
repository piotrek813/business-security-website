import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import theme from 'utils/theme';
import GlobalStyle from 'components/GlobalStyle';
import HeaderTemplate from 'templates/HeaderTemplate';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const MainTemplate = ({ hero, children }) => {
  const { datoCmsHome } = useStaticQuery(graphql`
    query {
      datoCmsHome {
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
  `);

  return (
    <ThemeProvider theme={theme}>
      <>
        <HelmetDatoCms seo={datoCmsHome.seoMetaTags}>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </HelmetDatoCms>
        <GlobalStyle />
        <Navbar />
        <HeaderTemplate heroImage={datoCmsHome.hero} {...hero} />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  hero: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

MainTemplate.defaultProps = {
  children: [],
};

export default MainTemplate;
