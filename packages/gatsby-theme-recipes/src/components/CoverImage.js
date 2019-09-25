/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

import Img from "gatsby-image";

const componentStyles = theme =>
  css`
    position: relative;
    border: 1px solid red;
  `;

const CoverImage = ({ image, ...props }) => {
  return (
    <div css={theme => componentStyles(theme)} {...props}>
      <Img fluid={image.sharp.fluid} style={{ position: "static" }} alt="" />
    </div>
  );
};

export default CoverImage;
