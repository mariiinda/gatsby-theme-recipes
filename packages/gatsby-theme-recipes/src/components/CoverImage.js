/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

import Img from "gatsby-image";

const componentStyles = theme =>
  css`
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      clip-path: circle(50%);
      shape-outside: circle(50%);
      width: 100%;
      height: 100%;
      max-height: 510px;
      max-width: 510px;
      ${"" /*    @media (min-width: 520px) {
        float: right;
        width: 50%;
        margin-left: 40px !important;
      } */}
    }
  `;

const CoverImage = ({ image, ...props }) => {
  return (
    <div css={theme => componentStyles(theme)} {...props}>
      <Img fluid={image.sharp.fluid} alt="" />
    </div>
  );
};

export default CoverImage;
