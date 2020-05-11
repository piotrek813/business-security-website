const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const services = await graphql(`
    query {
      allDatoCmsService(filter: { content: { ne: "" } }) {
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

  const posts = await graphql(`
    query {
      allDatoCmsPost {
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

  posts.data.allDatoCmsPost.edges.forEach(
    ({ node: { slug, hero, heading, contentNode } }) => {
      if (contentNode.childMarkdownRemark.html !== '') {
        createPage({
          path: slug,
          component: path.resolve('./src/templates/PostTemplate.js'),
          context: {
            slug,
            hero,
            heading,
            content: contentNode,
          },
        });
      }
    }
  );
};
