/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

const PostParagraph = props => (
  <Styled.p
    {...props}
    css={css`
      max-width: 680px;
    `}
  />
);
export default PostParagraph;
