/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

export const linkStyle = ({ theme, size }) => css`
  position: relative;
  text-decoration: none;
  font-size: ${size === "small" ? theme.fontSizes[2] : "inherit"};
  color: ${theme.colors.text};
  display: inline-block;
  align-items: center;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: ${theme.colors.primary};
  }
  &.active {
    color: ${theme.colors.primary};
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 9;
    opacity: 0.7;
  }
  &:hover:before,
  &:focus:before {
    width: 100%;
  }
`

const StyledLink = ({
  as: Element,
  to = "",
  children,
  size = "default",
  ...props
}) => {
  return (
    <Element
      to={to}
      {...(Element !== "a" && { activeClassName: "active" })}
      css={theme => linkStyle({ theme, size })}
      {...props}
    >
      {children}
    </Element>
  )
}

StyledLink.defaultProps = {
  as: Link
}

export default StyledLink
