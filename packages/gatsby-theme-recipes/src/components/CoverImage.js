/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";

const componentStyles = css`
  float: right;
  position: relative;
  width: 50%;
  clip-path: circle(50%);
  shape-outside: circle(52%);
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    > div {
      padding-bottom: 100% !important;
    }
  }
`;

const CoverImage = ({ image, alt = "", ...props }) => {
  return (
    <div css={componentStyles} {...props}>
      <Img fluid={image.sharp.fluid} alt={alt} />
    </div>
  );
};

export default CoverImage;
