/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";
import { Link } from "gatsby";
import Img from "gatsby-image";

const componentStyles = ({
  colors: { background, grey, primary, text },
  fontSizes: [, , , , fontSizeFive]
}) =>
  css`
    position: relative;
    display: flex;
    flex-direction: column;
    color: ${text};
    background: ${grey};
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-size: ${fontSizeFive};
    letter-spacing: 1px;
    box-shadow: 0 0 1px 0 currentColor;
    transition: 0.5s ease-in-out;
    will-change: auto;
    overflow: hidden;

    &:hover,
    &:focus {
      color: ${text};
      box-shadow: 0 0 2px 0 currentColor;
      background: ${background};
      color: ${primary};
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  `;

const imageWrapperStyles = css`
  flex: 0 1 70%;

  .gatsby-image-wrapper {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
    > div {
      padding-bottom: 0 !important;
    }

    img {
      will-change: auto;
      transition: 0.6s ease-out !important;
      transform-origin: center;
    }
  }
`;

const titleWrapperStyles = ({ fontSizes, sizes }) => css`
  text-transform: capitalize;
  font-size: ${fontSizes[3]};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1 1 70px;

  @media (min-width: ${sizes.md}px) {
    font-size: ${fontSizes[2]};
  }

  @media (min-width: ${sizes.lg}px) {
    font-size: ${fontSizes[3]};
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
      <div css={imageWrapperStyles}>
        <Img fluid={image.sharp.fluid} />
      </div>
      <div css={theme => titleWrapperStyles(theme)}>{title}</div>
    </Styled.a>
  );
};

export default RecipeCard;
