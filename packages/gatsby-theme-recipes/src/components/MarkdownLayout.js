/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

import PageLayout from "../components/PageLayout";
import BackLink from "../components/BackLink";

import StyledParagraph from "./StyledParagraph";
import useSiteMetadata from "../hooks/use-sitemetadata";

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
  StyledParagraph
};

const MarkdownLayout = ({ children }) => {
  const { basePath } = useSiteMetadata();
  return (
    <MDXProvider components={components}>
      <PageLayout>
        <BackLink path={basePath}>Back to recipes</BackLink>
        <div
          css={css`
            ul {
              p {
                display: inline-block;
              }
            }
            .gatsby-resp-image-wrapper {
              clear: both;
              width: 100%;
              img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
          `}
        >
          {children}
        </div>
      </PageLayout>
    </MDXProvider>
  );
};

export default MarkdownLayout;
