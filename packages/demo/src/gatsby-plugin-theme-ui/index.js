import theme from "@marinda/gatsby-theme-recipes/src/gatsby-plugin-theme-ui";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    muted: "#F9DFC9",
    modes: {
      dark: {
        ...theme.colors.modes.dark,
        muted: "#472438"
      }
    }
  }
};
