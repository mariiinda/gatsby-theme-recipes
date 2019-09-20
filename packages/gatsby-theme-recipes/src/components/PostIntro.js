/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

const PostIntro = props => (
  <Styled.p
    {...props}
    css={theme =>
      css`
        font-size: ${theme.fontSizes[3]};
        @media (min-width: 520px) {
          font-size: ${theme.fontSizes[4]};
        }
      `
    }
  />
);
export default PostIntro;
