/** @jsx jsx */
import { jsx } from "@emotion/core";

import StyledLink from "../components/StyledLink";

const BackLink = ({ path = "/", children }) => {
  return (
    <StyledLink to={path} size="small">
      <span aria-hidden>{"<"} </span> <span>{children}</span>
    </StyledLink>
  );
};

export default BackLink;
