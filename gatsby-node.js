const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const services = await graphql(`
    query {
      allDatoCmsService {
        edges {
          node {
            slug
            heading
            content {
              ... on DatoCmsText {
                textNode {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  services.data.allDatoCmsService.edges.forEach(
    ({ node: { slug, heading, content } }) => {
      if (content.length) {
        createPage({
          path: slug,
          component: path.resolve('./src/templates/ServicePageTemplate.js'),
          context: {
            slug,
            heading,
          },
        });
      }
    }
  );

  const posts = await graphql(`
    query {
      allDatoCmsPost {
        edges {
          node {
            slug
            heading
          }
        }
      }
    }
  `);

  posts.data.allDatoCmsPost.edges.forEach(
    ({ node: { slug, hero, heading } }) => {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/PostTemplate.js'),
        context: {
          slug,
          hero,
          heading,
        },
      });
    }
  );
};
