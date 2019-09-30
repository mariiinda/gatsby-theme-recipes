/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";
import { Link } from "gatsby";
import Img from "gatsby-image";

const componentStyles = ({
  colors: { background, primary },
  fontSizes: [, , , , fontSizeFive],
  zIndices: [, middle]
}) =>
  css`
    position: relative;
    display: block;
    color: ${background};
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-decoration: none;
    font-size: ${fontSizeFive};
    letter-spacing: 1px;

    span {
      position: absolute;
      z-index: ${middle};
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-transform: capitalize;
      opacity: 0;
      transform: translateY(-30px);
      transition: all 0.3s ease-in-out;
    }

    &::after {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${primary};
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover,
    &:focus {
      span {
        transform: translateY(0);
        opacity: 1;
        color: ${background};
      }
      &::after {
        opacity: 0.9;
      }
    }
  `;

const RecipeCard = ({ recipe: { title, slug, image }, ...props }) => {
  return (
    <Styled.a
      as={Link}
      to={`/${slug}`}
      css={theme => componentStyles(theme)}
      {...props}
    >
      <Img fluid={image.sharp.fluid} style={{ position: "static" }} />
      <span>{title}</span>
    </Styled.a>
  );
};

export default RecipeCard;
