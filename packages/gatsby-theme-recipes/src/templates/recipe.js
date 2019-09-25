/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";
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
  ${"" /*   outline: 1px solid red; */}
  position: relative;

  ${"" /* display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column; */}
`;

const headerStyle = css`
  ${"" /*   outline: 1px solid green; */}
  display: flex;
  ${"" /* float: left; */}
`;

const headerWrapperStyle = css`
  ${"" /* outline: 1px solid orange; */}
  width: 50%;
  ${"" /* float: left; */}
`;

const contentContainerStyle = css`
  ${"" /*   outline: 1px solid purple; */}
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
        {/*  <header css={headerStyle}>
          <div css={headerWrapperStyle}></div>
        </header> */}
        <div css={contentContainerStyle}>
          <CoverImage image={image} />
          <Styled.h1>{title}</Styled.h1>
          <p>{date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </MarkdownLayout>
  );
};

export default RecipeTemplate;
