/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { Styled } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MarkdownLayout from "../components/MarkdownLayout";
import CoverImage from "../components/CoverImage";
import PageTransition from "../components/PageTransition";

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
`;

const componentStyle = css`
  position: relative;
`;

const contentContainerStyle = css`
  float: left;
  margin: 0 0 20px !important;
`;

const RecipeTemplate = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, date, image }
    }
  }
}) => {
  return (
    <MarkdownLayout>
      <PageTransition>
        <article css={componentStyle}>
          <div css={contentContainerStyle}>
            <CoverImage image={image} alt={title} />
            <Styled.h1>{title}</Styled.h1>
            <p>{date}</p>

            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </article>
      </PageTransition>
    </MarkdownLayout>
  );
};

export default RecipeTemplate;
