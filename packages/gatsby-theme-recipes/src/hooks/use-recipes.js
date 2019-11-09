import { graphql, useStaticQuery } from "gatsby"

const useRecipes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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
  `)
  return { recipes: data.allMdx.nodes, tags: data.tags.group }
}

export default useRecipes
