/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Styled, useColorMode } from "theme-ui"
import { Button } from "@marinda/react-styled-buttons"

import StyledLink, { linkStyle } from "./StyledLink"

const FooterLinks = ({ items }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <nav>
      {items &&
        items.length > 0 &&
        items.map(({ name, href }) => {
          const isExternal = /^http/.test(href)
          return (
            <Fragment key={href}>
              {isExternal && (
                <Styled.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={theme => linkStyle({ theme })}
                >
                  {name}
                </Styled.a>
              )}
              {!isExternal && <StyledLink to={href}>{name}</StyledLink>}
            </Fragment>
          )
        })}

      <Button
        type="button"
        size="small"
        variant="primary"
        className="color-mode-btn"
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        {colorMode === "default" ? "Dark" : "Light"} Theme
      </Button>
    </nav>
  )
}

export default FooterLinks
