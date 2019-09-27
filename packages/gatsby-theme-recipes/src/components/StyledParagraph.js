/** @jsx jsx */
/* import { css, jsx } from "@emotion/core"; */
import { jsx, Styled } from "theme-ui";

const StyledParagraph = props => (
  <Styled.p
    sx={{
      width: "100%",
      maxWidth: "none !important",
      variant: "text.large"
    }}
    {...props}
  />
);
export default StyledParagraph;
