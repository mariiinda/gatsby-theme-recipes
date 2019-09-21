/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

const StyledParagraph = props => (
  <Styled.p
    css={theme =>
      css`
        max-width: 680px;
        font-size: ${theme.fontSizes[3]};
        margin-bottom: ${theme.space[4]}px;
        @media (min-width: 520px) {
          font-size: ${theme.fontSizes[4]};
        }
      `
    }
    {...props}
  />
);
export default StyledParagraph;
