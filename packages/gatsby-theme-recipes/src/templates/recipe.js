/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { Styled } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MarkdownLayout from "../components/MarkdownLayout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;

const componentStyle = css`
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`;

const recipeHeaderStyle = css`
  float: left;
`;

const contentStyle = css`
  float: left;
  margin: 0 0 20px !important;
`;

const RecipeTemplate = ({ data: { mdx: recipe } }) => {
  return (
    <MarkdownLayout>
      <div css={componentStyle}>
        <div css={recipeHeaderStyle}>
          <Styled.h1>{recipe.frontmatter.title}</Styled.h1>
          <p>{recipe.frontmatter.date}</p>
        </div>
        <div css={contentStyle}>
          <MDXRenderer>{recipe.body}</MDXRenderer>
        </div>
      </div>
    </MarkdownLayout>
  );
};

export default RecipeTemplate;
