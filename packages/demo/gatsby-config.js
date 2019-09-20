/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    description: "Classic recipes you’ll want to keep making.",
    intro: "Classic recipes you’ll want to keep making.",
    menuLinks: [
      {
        name: "About",
        slug: "/about/"
      }
    ],
    footerLinks: [
      {
        name: "Privacy Policy",
        href: "/privacy-policy"
      }
    ]
  },
  plugins: [
    {
      resolve: "@marinda/gatsby-theme-recipes",
      options: {
        basePath: "/",
        contentPath: "posts",
        iconPath: "src/images/faviconalt.png",
        title: "Classic Recipes",
        shortTitle: "Recipes"
      }
    }
  ]
};
