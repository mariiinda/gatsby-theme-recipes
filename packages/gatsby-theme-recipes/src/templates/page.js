import React from "react";
import { Styled } from "theme-ui";
import { Link } from "gatsby";

import PageLayout from "../components/PageLayout";

const PageTemplate = ({ pageContext }) => (
  <PageLayout>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <Styled.a as={Link} to="/about">
      about
    </Styled.a>
  </PageLayout>
);

export default PageTemplate;
