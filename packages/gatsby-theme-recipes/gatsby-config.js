const path = require("path");

module.exports = ({
  basePath = "/",
  contentPath = "posts",
  iconPath,
  title = "Delicious Recipes",
  shortTitle = "Recipes"
}) => {
  return {
    siteMetadata: {
      title,
      titleTemplate: "%s · ",
      description: "Delicious recipes you’ll want to keep making.",
      url: "", // No trailing slash allowed!
      image: "", // Path to your image you placed in the 'static' folder
      author: "",
      intro: "Delicious recipes you’ll want to keep making.",
      basePath,
      menuLinks: [
        {
          name: "About",
          slug: "/about/"
        }
      ],
      footerLinks: [
        {
          name: "Terms",
          href: "/terms"
        }
      ]
    },
    plugins: [
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: `${__dirname}/src/pages`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: "pages",
          path: `${__dirname}/src/pages/`
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: contentPath
        }
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          defaultLayouts: {
            default: require.resolve("./src/components/MarkdownPagesLayout.js"),
            pages: require.resolve("./src/components/MarkdownLayout.js")
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 510,
                maxHeight: 510,
                linkImagesToOriginal: false,
                withWebp: true,
                quality: 75
              }
            }
          ]
        }
      },
      "gatsby-plugin-theme-ui",
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: title,
          short_name: shortTitle,
          start_url: basePath,
          background_color: "#FFF",
          theme_color: "#FFF",
          display: "standalone",
          icon: iconPath
            ? path.resolve(iconPath)
            : require.resolve("./src/images/favicon.png"),

          crossOrigin: `use-credentials`
        }
      },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-emotion"
    ]
  };
};
