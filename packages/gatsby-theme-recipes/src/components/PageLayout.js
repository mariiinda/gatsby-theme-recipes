import React from "react";
import { Global } from "@emotion/core";
import { Flex, Container, Styled } from "theme-ui";
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
      <Flex
        sx={{
          pt: 2,
          borderWidth: ["10px", "32px"],
          borderStyle: "solid",
          borderColor: "muted",
          display: "flex",
          boxSizing: "border-box",
          minWidth: "0px",
          minHeight: "100vh",
          flexDirection: "column",
          paddingTop: "8px"
        }}
      >
        <Container
          sx={{
            maxWidth: "xl",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: [3, 4, 5]
          }}
        >
          <header>
            <MenuLinks items={menuLinks} />
            <Styled.h1>
              <Styled.a as={Link} to={basePath}>
                {title}
              </Styled.a>
            </Styled.h1>
          </header>
          <main>{children}</main>
          <footer>
            <FooterLinks items={footerLinks} />
          </footer>
        </Container>
      </Flex>
    </Styled.root>
  );
};

export default PageLayout;
