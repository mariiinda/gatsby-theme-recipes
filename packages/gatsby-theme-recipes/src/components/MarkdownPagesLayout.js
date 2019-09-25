/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

import PageLayout from "./PageLayout";
import BackLink from "./BackLink";
import PageImage from "./PageImage";
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
  StyledParagraph,
  Image: PageImage
};

const componentCSS = ({ sizes = {} }) => css`
  > * {
    max-width: ${sizes.md}px;
  }
  img {
    float: left;
    width: 100%;
  }
  ul {
    p {
      display: inline-block;
    }
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
`;

const MarkdownPagesLayout = ({ children }) => {
  const { basePath } = useSiteMetadata();
  return (
    <MDXProvider components={components}>
      <PageLayout>
        <BackLink path={basePath}>Back to recipes</BackLink>
        <div css={theme => componentCSS(theme)}>{children}</div>
      </PageLayout>
    </MDXProvider>
  );
};

export default MarkdownPagesLayout;
