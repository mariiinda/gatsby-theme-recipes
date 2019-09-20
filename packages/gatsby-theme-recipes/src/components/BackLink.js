/** @jsx jsx */
import { jsx } from "@emotion/core";

import StyledLink from "../components/StyledLink";

const BackLink = () => {
  return (
    <div>
      <StyledLink to={"/"} size="small">
        <span aria-hidden>{"<"} </span> <span>Back to recipes </span>
      </StyledLink>
    </div>
  );
};

export default BackLink;
