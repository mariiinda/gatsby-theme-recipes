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
            columns: 2 auto;
            column-width: 450px;
            column-gap: 40px;
            column-fill: balance;
            ul {
              p {
                display: inline-block;
              }
            }
            p {
              max-width: 680px;
            }
            img {
              float: right;
              max-width: 680px;
            }
            .gatsby-resp-image-wrapper {
              width: 100%;
              break-inside: avoid;
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
