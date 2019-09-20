const fs = require("fs");

// Make sure the recipes directory exists
exports.onPreBootstrap = ({ reporter }, { contentPath = "recipes" }) => {
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async (
  { actions, graphql, reporter },
  { basePath = "/" }
) => {
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/recipes.js")
  });

  // recipe pages
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create recipes", result.errors);
  }

  const recipes = result.data.allMdx.nodes;

  recipes.forEach(recipe => {
    actions.createPage({
      path: recipe.frontmatter.slug,
      component: require.resolve("./src/templates/recipe.js"),
      context: {
        slug: recipe.frontmatter.slug
      }
    });
  });

  // tags pages
  const tagsResult = await graphql(`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `);

  if (tagsResult.errors) {
    reporter.panic("failed to create tags", tagsResult.errors);
  }

  const tags = tagsResult.data.allMdx.group;

  tags.forEach(tag => {
    actions.createPage({
      path: `${basePath}tags/${tag.tag}`,
      component: require.resolve("./src/templates/taggedRecipes.js"),
      context: {
        tag: tag.tag
      }
    });
  });
};
