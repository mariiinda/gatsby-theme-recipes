/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PageLayout from "../components/PageLayout";
import BackLink from "../components/BackLink";
import useSiteMetadata from "../hooks/use-sitemetadata";
import PostIntro from "../components/PostIntro";

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
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`;

const recipeHeaderStyle = css`
  float: left;
`;

const contentStyle = css`
  float: left;
  .gatsby-resp-image-wrapper {
    width: 60%;
    @media (min-width: 520px) {
      float: right;
      width: 50%;
      margin-left: 40px !important;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const components = {
  h1: Styled.h1,
  h2: Styled.h2,
  h3: Styled.h3,
  h4: Styled.h4,
  h5: Styled.h5,
  table: Styled.table,
  tr: Styled.tr,
  th: Styled.th,
  ul: Styled.ul,
  p: Styled.p,
  Intro: PostIntro
};

const RecipeTemplate = ({ data: { mdx: recipe } }) => {
  const { basePath } = useSiteMetadata();
  return (
    <MDXProvider components={components}>
      <PageLayout>
        <div css={componentStyle}>
          <div css={recipeHeaderStyle}>
            <BackLink path={basePath}>Back to recipes</BackLink>
            <Styled.h1>{recipe.frontmatter.title}</Styled.h1>
            <p>{recipe.frontmatter.date}</p>
          </div>
          <div css={contentStyle}>
            <MDXRenderer>{recipe.body}</MDXRenderer>
          </div>
        </div>
      </PageLayout>
    </MDXProvider>
  );
};

export default RecipeTemplate;
