/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/SEO"
import MarkdownLayout from "../components/MarkdownLayout"
import CoverImage from "../components/CoverImage"
import PageTransition from "../components/PageTransition"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          sharp: childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

const RecipeTemplate = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, date, image }
    }
  }
}) => {
  return (
    <article>
      <SEO title={title} image={image.sharp.fluid.src} />
      <MarkdownLayout>
        <PageTransition>
          <CoverImage image={image} alt={title} />
          <Styled.h1>{title}</Styled.h1>
          <time sx={{ variant: "text.small" }}>{date}</time>
          <MDXRenderer>{body}</MDXRenderer>
        </PageTransition>
      </MarkdownLayout>
    </article>
  )
}

export default RecipeTemplate
