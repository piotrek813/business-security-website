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
            contentNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `);

  services.data.allDatoCmsService.edges.forEach(({ node }) => {
    if (node.contentNode.childMarkdownRemark.html !== '') {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/ServicePageTemplate.js'),
        context: {
          slug: node.slug,
          heading: node.heading,
          content: node.contentNode,
        },
      });
    }
  });
};
