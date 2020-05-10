import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import Section from 'components/Section';
import SectionGroup from 'components/SectionGroup';
import PostGroup from 'components/PostGroup';
import PostReference from 'components/PostReference';

const IndexPage = ({ data: { datoCmsHome, allDatoCmsService } }) => (
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
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x303/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x304/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x305/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x306/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x307/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x308/?business"
      />
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
  }
`;

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;
