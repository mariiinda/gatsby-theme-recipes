/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

import RecipeCard from "../components/RecipeCard";

const createGridTemplate = length => {
  switch (length) {
    case 1:
      return `"i1 i1 i1" "i1 i1 i1"`;
    case 2:
      return `"i1 i1 i2" "i1 i1 i2"`;
    case 3:
      return `"i1 i2 i3" "i1 i2 i3"`;
    case 4:
      return `"i1 i2 i4" "i1 i3 i4"`;
    case 5:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i5 i4"`;
    case 6:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i5 i6"`;
    case 7:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i3 i6" "i5 i7 i6"`;
    case 8:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i6 i8" "i5 i7 i8"`;
    case 9:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i6 i6" "i5 i8 i9" "i7 i8 i9"`;
    case 10:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i6 i9" "i5 i7 i9" "i8 i7 i10" "i8 i11 i11"`;
    case 11:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i6 i9" "i5 i7 i9" "i8 i7 i10" "i8 i11 i11"`;
    default:
      return `"i1 i2 i4" "i1 i3 i4" "i5 i5 i6" "i7 i8 i10" "i7 i9 i10" "i11 i11 i12"`;
  }
};

const gridParentCSS = length => css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 1rem;
  padding-top: 40px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: ${createGridTemplate(length)};
    grid-auto-rows: 160px;
  }
`;

const gridItem = name =>
  css`
    @media (min-width: 768px) {
      grid-area: ${name};
    }
  `;

const RecipeGrid = ({ recipes = [] }) => {
  return (
    <Styled.div css={gridParentCSS(recipes.length)}>
      {recipes.length > 0 &&
        recipes.map(({ frontmatter: { title, slug, image } }, index) => {
          return (
            <RecipeCard
              key={slug}
              recipe={{ title, slug, image }}
              css={gridItem(`i${index + 1}`)}
            />
          );
        })}
    </Styled.div>
  );
};

export default RecipeGrid;

export const query = graphql`
  fragment IndexRecipeFragment on Mdx {
    frontmatter {
      title
      slug
      image {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
