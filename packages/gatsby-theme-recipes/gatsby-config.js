const path = require("path");

module.exports = ({
  basePath = "/",
  contentPath = "recipes",
  iconPath,
  title = "Delicious Recipes",
  shortTitle = "Recipes"
}) => {
  return {
    siteMetadata: {
      title,
      description: "Delicious recipes you’ll want to keep making.",
      url: "",
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
          path: `${__dirname}/${"recipes"}`
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
            default: require.resolve("./src/components/PagesLayout.js"),
            pages: require.resolve("./src/components/MarkdownLayout.js")
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 650,
                linkImagesToOriginal: false,
                withWebp: true
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
            : require.resolve("src/images/favicon.png"),

          crossOrigin: `use-credentials`
        }
      },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-emotion"
    ]
  };
};
