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
import defaultImage from "../images/og-image.jpg";

const PageLayout = ({ children }) => {
  const {
    title = "",
    description = "",
    url = "",
    author = "",
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
          }
        }}
      />
      <StyledLayout>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={`${url}${defaultImage}`} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content={author} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={`${url}${defaultImage}`} />
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
