import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import PageLayout from "../components/PageLayout";
import RecipeGrid from "../components/RecipeGrid";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Tags from "../components/Tags";
import PageIntro from "../components/PageIntro";
import Pagination from "../components/Pagination";

export const query = graphql`
  query($tag: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { eq: $tag } } }
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
  pageContext: { currentPage, numPages, tag }
}) => {
  const { intro, title, image, basePath } = useSiteMetadata();
  return (
    <>
      <SEO title={title} image={image} />
      <PageLayout>
        <PageIntro>{intro}</PageIntro>
        <Tags tags={tags.group} />
        <RecipeGrid recipes={recipes} />
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          basePath={`${basePath}tags/${tag}/`}
        />
      </PageLayout>
    </>
  );
};

export default RecipesTemplate;
