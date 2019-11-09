/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import StyledLink from "./StyledLink"

const PageLink = ({ children, ...props }) => {
  return (
    <StyledLink
      as="a"
      css={css`
        display: inline;
        text-decoration: underline;
        word-break: break-word;
        &::before {
          display: none;
        }
      `}
      {...props}
    >
      {children}
    </StyledLink>
  )
}

export default PageLink
