/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const componentStyles = ({ theme: { space = [] }, position }) => css`
  float: ${position};
  width: 50%;
  display: flex;
  justify-content: ${position === "left" ? "flex-start" : "flex-end"};
  margin-bottom: ${space[4]}px;
  img {
    width: 90%;
  }
`;

const PageImage = ({ src = "", alt = "", position = "none", ...props }) => {
  return (
    <div css={theme => componentStyles({ theme, position })} {...props}>
      <img alt={alt} src={src} />
    </div>
  );
};

export default PageImage;
