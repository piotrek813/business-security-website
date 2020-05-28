import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import media from 'utils/media';
import MainTemplate from 'templates/MainTemplate';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

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

const StyledImg = styled(Img)`
  max-width: 100%;
  max-height: 250px;
  margin: 30px 0;

  ${media.medium`
      max-height: 400px;
  `}

  ${media.big`
      max-height: 550px;
  `}
`;

const ServicePageTemplate = ({ pageContext, data: { datoCmsService } }) => (
  <MainTemplate hero={{ heading: pageContext.heading, paragraph: '' }}>
    <HelmetDatoCms seo={datoCmsService.seoMetaTags} />
    <Article>
      {datoCmsService.content.map((item) => (
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
  </MainTemplate>
);

export const query = graphql`
  query ServiceQuery($slug: String!) {
    datoCmsService(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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
