import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import renderSetions from 'utils/renderSections';

const AboutMePage = ({ data: { datoCmsAboutMe } }) => (
  <MainTemplate
    hero={{
      heading: datoCmsAboutMe.heading,
      paragraph: datoCmsAboutMe.subtitle,
    }}
  >
    <HelmetDatoCms seo={datoCmsAboutMe.seoMetaTags} />
    {renderSetions(datoCmsAboutMe.content)}
  </MainTemplate>
);

export const query = graphql`
  query AboutMeQuery {
    datoCmsAboutMe {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }

      heading
      subtitle

      content {
        ... on DatoCmsSectionWithImage {
          image {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            title
            alt
          }
          heading
          textNode {
            childMarkdownRemark {
              html
            }
          }
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsSectionWithoutImageCenter {
          heading
          text
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsSectionWithoutImage {
          heading
          textNode {
            childMarkdownRemark {
              html
            }
          }
          id
          model {
            apiKey
          }
        }
      }
    }
  }
`;

AboutMePage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AboutMePage;
