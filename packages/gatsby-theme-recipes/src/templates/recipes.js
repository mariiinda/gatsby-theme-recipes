/** @jsx jsx */
import { jsx } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import RecipeGrid from "../components/RecipeGrid";
import useRecipes from "../hooks/use-recipes";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Tags from "../components/Tags";
import PageIntro from "../components/PageIntro";

const RecipesTemplate = () => {
  const { recipes, tags } = useRecipes();
  const { intro, basePath } = useSiteMetadata();
  return (
    <PageLayout>
      <PageIntro>{intro}</PageIntro>
      <Tags basePath={basePath} tags={tags} />
      <RecipeGrid recipes={recipes} />
    </PageLayout>
  );
};

export default RecipesTemplate;
