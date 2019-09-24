import React from "react";
import { Global } from "@emotion/core";
import {
  Layout as StyledLayout,
  Header,
  Footer,
  Main,
  Container,
  Styled
} from "theme-ui";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import MenuLinks from "./MenuLinks";
import FooterLinks from "./FooterLinks";
import useSiteMetadata from "../hooks/use-sitemetadata";

const PageLayout = ({ children }) => {
  const {
    title = "",
    description = "",
    menuLinks = [],
    footerLinks = [],
    basePath
  } = useSiteMetadata();

  return (
    <Styled.root>
      <Global
        styles={{
          body: {
            margin: "0"
          },
          "*": {
            boxSizing: "border-box"
          },
          "@font-face": {
            fontFamily: "Cardo",
            src: 'url("/fonts/cardo-regular.woff2")',
            fontDisplay: "swap",
            fontWeight: 400,
            fontStyle: "normal"
          }
        }}
      />
      <StyledLayout>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Container>
          <Header>
            <MenuLinks items={menuLinks} />
            <Styled.h1>
              <Styled.a as={Link} to={basePath}>
                {title}
              </Styled.a>
            </Styled.h1>
          </Header>
          <Main>{children}</Main>
          <Footer>
            <FooterLinks items={footerLinks} />
          </Footer>
        </Container>
      </StyledLayout>
    </Styled.root>
  );
};

export default PageLayout;
