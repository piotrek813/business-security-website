import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import PostGroup from 'components/PostGroup';
import PostReference from 'components/PostReference';
import renderSections from 'utils/renderSections';

const IndexPage = ({ data: { datoCmsHome } }) => (
  <MainTemplate
    hero={{
      heading: datoCmsHome.heading,
      paragraph: datoCmsHome.subtitle,
    }}
  >
    <div id="services" />
    {renderSections(datoCmsHome.content)}
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

      content {
        ... on DatoCmsSectionWithImage {
          heading
          text
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
          text
          id
          model {
            apiKey
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
