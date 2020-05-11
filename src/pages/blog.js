import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import PostGroup from 'components/PostGroup';
import PostReference from 'components/PostReference';

const BlogPage = ({ data: { allDatoCmsPost, datoCmsBlog } }) => {
  const { node: firstPost } = allDatoCmsPost.edges.shift();

  return (
    <MainTemplate
      hero={{ heading: datoCmsBlog.heading, paragraph: datoCmsBlog.subtitle }}
    >
      <HelmetDatoCms seo={datoCmsBlog.seoMetaTags} />
      <PostReference
        isBig
        slug={`/${firstPost.slug}`}
        image={firstPost.hero}
        heading={firstPost.heading}
        paragraph={firstPost.content.substr(0, 200)}
      />
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
};

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query BlogQuery {
    datoCmsBlog {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      subtitle
    }
    allDatoCmsPost(sort: { fields: meta___publishedAt, order: ASC }) {
      edges {
        node {
          slug
          heading
          content
          hero {
            fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
