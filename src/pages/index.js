import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import Section from 'components/Section';
import SectionGroup from 'components/SectionGroup';
import PostGroup from 'components/PostGroup';
import PostReference from 'components/PostReference';

const IndexPage = ({
  data: { datoCmsHome, allDatoCmsService, allDatoCmsPost },
}) => (
  <MainTemplate
    hero={{
      heading: datoCmsHome.heading,
      paragraph: datoCmsHome.subtitle,
    }}
  >
    <div id="services" />
    <SectionGroup>
      {allDatoCmsService.edges.map(
        (
          { node: { id, image, heading, textHomePageNode, content, slug } },
          index
        ) => (
          <Section
            key={id}
            isMirror={index % 2 !== 0}
            image={image}
            heading={heading}
            paragraph={textHomePageNode}
            buttonLink={content !== '' ? `/${slug}` : ''}
          />
        )
      )}
    </SectionGroup>

    <PostGroup heading="Blog">
      {allDatoCmsPost.edges.map(
        ({ node: { slug, hero, heading, content } }) => (
          <PostReference
            key={slug}
            slug={`/${slug}`}
            image={hero}
            heading={heading}
            paragraph={content.substr(0, 200)}
          />
        )
      )}
    </PostGroup>
  </MainTemplate>
);

export const query = graphql`
  query HomeQuery {
    datoCmsHome {
      heading
      subtitle
    }
    allDatoCmsService(sort: { fields: position }) {
      edges {
        node {
          id
          slug
          image {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            title
            alt
          }
          heading
          textHomePageNode {
            childMarkdownRemark {
              html
            }
          }
          content
        }
      }
    }
    allDatoCmsPost(
      limit: 4
      sort: { fields: meta___publishedAt, order: DESC }
    ) {
      edges {
        node {
          slug
          heading
          content
          hero {
            fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;
