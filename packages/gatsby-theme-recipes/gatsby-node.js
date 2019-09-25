const fs = require("fs");

// Make sure the recipes directory exists
exports.onPreBootstrap = ({ reporter }, { contentPath = "posts" }) => {
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async (
  { actions: { createPage }, graphql, reporter },
  { basePath = "/" }
) => {
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

  const recipesPerPage = 12;
  const numPages = Math.ceil(recipes.length / recipesPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? basePath : `${basePath}${i + 1}`,
      component: require.resolve("./src/templates/recipes.js"),
      context: {
        limit: recipesPerPage,
        skip: i * recipesPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });

  recipes.forEach(recipe => {
    createPage({
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
          totalCount
        }
      }
    }
  `);

  if (tagsResult.errors) {
    reporter.panic("failed to create tags", tagsResult.errors);
  }

  const tags = tagsResult.data.allMdx.group;

  tags.forEach(tag => {
    const numPages = Math.ceil(tag.totalCount / recipesPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `${basePath}tags/${tag.tag}`
            : `${basePath}tags/${tag.tag}/${i + 1}`,
        component: require.resolve("./src/templates/taggedRecipes.js"),
        context: {
          tag: tag.tag,
          limit: recipesPerPage,
          skip: i * recipesPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });
};
