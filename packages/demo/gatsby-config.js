/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Classic Recipes",
    shortTitle: "Recipes",
    description: "Classic recipes you’ll want to keep making.",
    url: "https://recipes-demo.marinda.me", // No trailing slash allowed!
    image: "/images/og-image.jpg", // Path to your image you placed in the 'static' folder
    author: "",
    intro: "Classic recipes you’ll want to keep making.",
    menuLinks: [
      {
        name: "About",
        slug: "/about/"
      }
    ],
    footerLinks: [
      {
        name: "Privacy Policy & Cookies",
        href: "/privacy-policy"
      },
      {
        name: "Gatsby Theme Recipes on Github",
        href:
          "https://github.com/mariiinda/gatsby-theme-recipes/tree/master/packages/gatsby-theme-recipes"
      }
    ]
  },
  plugins: [
    {
      resolve: "@westegg/gatsby-theme-recipes",
      options: {
        title: "Classic Recipes",
        shortTitle: "Recipes"
      }
    }
  ]
}
