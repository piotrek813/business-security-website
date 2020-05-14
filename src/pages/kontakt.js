import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import media from 'utils/media';
import MainTemplate from 'templates/MainTemplate';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import H2 from 'components/SectionHeading';
import P from 'components/SectionParagraph';

const StyledWrapper = styled.section`
  text-align: left;
  padding: ${({ theme }) => theme.padding.normal};

  ${media.small`
      margin: 0 auto;
      width: 500px;
  `}
`;

const ContactPage = ({ data: { datoCmsContact } }) => (
  <MainTemplate
    hero={{
      heading: datoCmsContact.heading,
      paragraph: datoCmsContact.subtitle,
      buttons: [{ to: '/#services', label: 'Moja oferta' }],
    }}
  >
    <HelmetDatoCms seo={datoCmsContact.seoMetaTags} />
    <StyledWrapper>
      <H2>Lorem ipsum dolor sit ament</H2>
      {console.log(datoCmsContact)}
      <P
        as="div"
        dangerouslySetInnerHTML={{
          __html: datoCmsContact.contactDataNode.childMarkdownRemark.html,
        }}
      />
    </StyledWrapper>
  </MainTemplate>
);

export const query = graphql`
  query ContactQuery {
    datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      subtitle
      contactDataNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ContactPage;
