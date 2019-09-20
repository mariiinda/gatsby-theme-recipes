/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Styled } from "theme-ui";

import PageLayout from "../components/PageLayout";
import RecipeGrid from "../components/RecipeGrid";
import useRecipes from "../hooks/use-recipes";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Tags from "../components/Tags";

const RecipesTemplate = () => {
  const { recipes, tags } = useRecipes();
  const { intro } = useSiteMetadata();
  return (
    <PageLayout>
      <Styled.p
        css={theme =>
          css`
            text-align: center;
            padding: 0 0 ${theme.space[3]}px;
          `
        }
      >
        {intro}
      </Styled.p>
      <Tags tags={tags} />
      <RecipeGrid recipes={recipes} />
    </PageLayout>
  );
};

export default RecipesTemplate;
