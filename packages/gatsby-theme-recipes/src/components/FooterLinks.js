/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { Styled } from "theme-ui";

import StyledLink, { linkStyle } from "./StyledLink";

const FooterLinks = ({ items }) => {
  return (
    <nav>
      {items &&
        items.length > 0 &&
        items.map(({ name, href }) => {
          const isExternal = /^http/.test(href);
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
          );
        })}
    </nav>
  );
};

export default FooterLinks;
