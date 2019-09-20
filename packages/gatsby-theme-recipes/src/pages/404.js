/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

import PageLayout from "../components/PageLayout";
import BackLink from "../components/BackLink";
import useSiteMetadata from "../hooks/use-sitemetadata";

const NotFoundPage = () => {
  const { basePath } = useSiteMetadata();
  return (
    <PageLayout>
      <Styled.h1
        css={theme =>
          css`
            text-align: center;
            padding: 0 0 ${theme.space[3]}px;
          `
        }
      >
        Page Not Found :(
      </Styled.h1>
      <Styled.p
        css={css`
          text-align: center;
        `}
      >
        <BackLink path={basePath}>Back to recipes</BackLink>
      </Styled.p>
    </PageLayout>
  );
};

export default NotFoundPage;
