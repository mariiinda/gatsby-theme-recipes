/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import StyledLink from "./StyledLink";

const PageLink = ({ children, ...props }) => {
  return (
    <StyledLink
      css={css`
        &::before {
          width: 100%;
          bottom: 1px;
        }
      `}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

export default PageLink;
