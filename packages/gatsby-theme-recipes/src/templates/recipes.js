/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import RecipeGrid from "../components/RecipeGrid";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Tags from "../components/Tags";
import PageIntro from "../components/PageIntro";
import Pagination from "../components/Pagination";

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
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
  },
  pageContext: { currentPage, numPages }
}) => {
  const { intro } = useSiteMetadata();

  return (
    <PageLayout>
      <PageIntro>{intro}</PageIntro>
      <Tags tags={tags.group} />
      <RecipeGrid recipes={recipes} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </PageLayout>
  );
};

export default RecipesTemplate;
