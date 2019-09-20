/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import RecipeGrid from "../components/RecipeGrid";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Tags from "../components/Tags";
import PageIntro from "../components/PageIntro";

export const query = graphql`
  query($tag: String!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      nodes {
        ...IndexRecipeFragment
      }
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;

const RecipesTemplate = ({
  data: {
    allMdx: { nodes: recipes = [] },
    tags
  }
}) => {
  const { intro } = useSiteMetadata();
  return (
    <PageLayout>
      <PageIntro>{intro}</PageIntro>
      <Tags tags={tags.group} />
      <RecipeGrid recipes={recipes} />
    </PageLayout>
  );
};

export default RecipesTemplate;
