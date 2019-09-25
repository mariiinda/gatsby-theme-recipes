/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

const PageIntro = ({ children }) => {
  return (
    <Styled.p
      css={theme =>
        css`
          text-align: center;
          padding: 0 0 ${theme.space[3]}px;
          text-align: center;
          margin: 0 auto ${theme.space[3]}px;
        `
      }
    >
      {children}
    </Styled.p>
  );
};

export default PageIntro;
