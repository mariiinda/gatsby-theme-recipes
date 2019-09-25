/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

import Img from "gatsby-image";

const componentStyles = theme =>
  css`
    float: right;
    position: relative;
    width: 50%;
    clip-path: circle(50%);
    shape-outside: circle(52%);
    ${"" /* display: flex;
    justify-content: center;
    align-items: center; */}
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;

      > div {
        padding-bottom: 100% !important;
      }
      ${"" /* max-height: 510px;
      max-width: 510px; */}
      ${"" /*    @media (min-width: 520px) {
        float: right;
        width: 50%;
        margin-left: 40px !important;
      } */}
    }
  `;

const CoverImage = ({ image, alt = "", ...props }) => {
  return (
    <div css={theme => componentStyles(theme)} {...props}>
      <Img fluid={image.sharp.fluid} alt={alt} />
    </div>
  );
};

export default CoverImage;
