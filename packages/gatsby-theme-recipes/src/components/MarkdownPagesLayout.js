/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"

import PageLayout from "./PageLayout"
import BackLink from "./BackLink"
import PageImage from "./PageImage"
import StyledParagraph from "./StyledParagraph"
import useSiteMetadata from "../hooks/use-sitemetadata"
import PageTransition from "./PageTransition"
import PageLink from "./PageLink"

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
  Image: PageImage,
  a: PageLink
}

const MarkdownPagesLayout = ({ children }) => {
  const { basePath } = useSiteMetadata()
  return (
    <MDXProvider components={components}>
      <PageLayout>
        <PageTransition>
          <BackLink path={basePath}>Back to recipes</BackLink>
          <div sx={{ variant: "markdownWrappers.pages" }}>{children}</div>
        </PageTransition>
      </PageLayout>
    </MDXProvider>
  )
}

export default MarkdownPagesLayout
