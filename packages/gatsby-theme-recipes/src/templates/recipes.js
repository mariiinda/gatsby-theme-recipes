import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import PageLayout from "../components/PageLayout"
import RecipeGrid from "../components/RecipeGrid"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Tags from "../components/Tags"
import PageIntro from "../components/PageIntro"
import Pagination from "../components/Pagination"
import PageTransition from "../components/PageTransition"

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
`

const RecipesTemplate = ({
  data: {
    allMdx: { nodes: recipes = [] },
    tags
  },
  pageContext: { currentPage, numPages }
}) => {
  const { title, image, intro } = useSiteMetadata()
  return (
    <>
      <SEO title={title} image={image} />
      <PageLayout>
        <PageIntro>{intro}</PageIntro>
        <Tags tags={tags.group} />
        <PageTransition>
          <RecipeGrid recipes={recipes} />
        </PageTransition>
        <Pagination currentPage={currentPage} numPages={numPages} />
      </PageLayout>
    </>
  )
}

export default RecipesTemplate
