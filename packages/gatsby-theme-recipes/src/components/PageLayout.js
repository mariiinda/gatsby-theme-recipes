import React from "react";
import { Global } from "@emotion/core";
import {
  Layout as StyledLayout,
  Header,
  Footer,
  Main,
  Container,
  Styled,
  ThemeProvider,
  ColorMode
} from "theme-ui";
import { Link } from "gatsby";

import MenuLinks from "./MenuLinks";
import FooterLinks from "./FooterLinks";
import useSiteMetadata from "../hooks/use-sitemetadata";

const PageLayout = ({ children }) => {
  const {
    title = "",
    menuLinks = [],
    footerLinks = [],
    basePath
  } = useSiteMetadata();

  return (
    <Styled.root>
      <Global
        styles={{
          body: {
            margin: "0",
            textUnderlinePosition: "under"
          },
          "*": {
            boxSizing: "border-box"
          }
        }}
      />
      <StyledLayout>
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
