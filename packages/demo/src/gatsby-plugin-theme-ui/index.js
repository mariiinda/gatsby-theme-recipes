import theme from "@westegg/gatsby-theme-recipes/src/gatsby-plugin-theme-ui"

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
}
