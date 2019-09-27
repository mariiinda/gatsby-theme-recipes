/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

import PageLayout from "../components/PageLayout";
import BackLink from "../components/BackLink";
import StyledParagraph from "./StyledParagraph";
import ListItem from "./ListItem";
import useSiteMetadata from "../hooks/use-sitemetadata";
import PageLink from "./PageLink";

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
  ListItem,
  a: PageLink
};

const MarkdownLayout = ({ children }) => {
  const { basePath } = useSiteMetadata();
  return (
    <MDXProvider components={components}>
      <PageLayout>
        <BackLink path={basePath}>Back to recipes</BackLink>
        <div sx={{ variant: "markdownWrappers.recipes" }}>{children}</div>
      </PageLayout>
    </MDXProvider>
  );
};

export default MarkdownLayout;
