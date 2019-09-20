/** @jsx jsx */
import { jsx } from "@emotion/core";

import StyledLink from "./StyledLink";

const MenuLinks = ({ items }) => {
  return (
    <nav>
      {items &&
        items.length > 0 &&
        items.map(({ name, slug }) => (
          <StyledLink key={name} to={slug}>
            {name}
          </StyledLink>
        ))}
    </nav>
  );
};

export default MenuLinks;
