/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { graphql } from "gatsby";
import { Styled } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MarkdownLayout from "../components/MarkdownLayout";
import CoverImage from "../components/CoverImage";

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
  ${"" /* display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column; */}
`;

const headerStyle = css`
  ${"" /* float: left; */}
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
      <article css={componentStyle}>
        <header css={headerStyle}>
          <Styled.h1>{title}</Styled.h1>
          <p>{date}</p>
          <CoverImage image={image} />
        </header>
        <div css={contentContainerStyle}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </MarkdownLayout>
  );
};

export default RecipeTemplate;
