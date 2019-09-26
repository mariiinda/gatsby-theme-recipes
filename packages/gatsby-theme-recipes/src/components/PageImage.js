/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const componentStyles = ({ theme: { space = [] }, position }) => css`
  float: none;
  width: 100%;
  margin-top: ${space[4]}px;
  margin-bottom: ${space[4]}px;

  @media (min-width: 420px) {
    margin-top: 0;
    width: 50%;
    float: ${position};
    display: flex;
    justify-content: ${position === "left" ? "flex-start" : "flex-end"};
  }
  img {
    width: 100%;
    float: none;
    @media (min-width: 420px) {
      width: 90%;
    }
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
