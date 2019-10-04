# Gatsby Theme Recipes

A Gatsby theme for recipe enthusiasts.

<p align="center">
  <a href="https://www.npmjs.com/package/@marinda/gatsby-theme-recipes" target="_blank">
    <img src="https://badgen.net/npm/v/@marinda/gatsby-theme-recipes" alt="">
    </a>
 <a href="https://github.com/mariiinda/gatsby-theme-recipes/blob/master/packages/gatsby-theme-recipes/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Gatsby Theme Recipes is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@marinda/gatsby-theme-recipes" target="_blank">
    <img src="https://badgen.net/npm/dt/@marinda/gatsby-theme-recipes" alt="">
  </a>
</p>

![Screenshots of gatsby theme recipes demo site](https://github.com/mariiinda/gatsby-theme-recipes/raw/master/assets/cover.jpg?raw=true)

## [View the Demo](https://recipes-demo.marinda.me/)

## What you get from this theme

- Write recipes in MDX
- Optimized images
- Tags for you recipes
- Customizable [Theme-UI](https://theme-ui.com/) theme
- Pagination if recipes per page exceeds 12 items
- SEO: meta tags
- Color modes: light & dark

## Installation from scratch

This guide will take you through adding the theme to a new project.

1.  Installation

    ```sh
    npm i -S react react-dom gatsby @marinda/gatsby-theme-recipes
    ```



2. Folder structure

The following is the recommended folder structure:

```
  recipe-site
    ├── posts
    │ ├── my-first-recipe
    │ │   ├── images
    │ │   │    └── my-first-recipe-image.jpg
    │ │   └── my-first-recipe.mdx
    ├── node_modules
    ├── gatsby-config.js
    └── package.json
```

1.  Create `gatsby-config.js` and add the theme:

Add `@marinda/gatsby-theme-recipes` as a plugin in `gatsby-config.js`.
`@marinda/gatsby-theme-recipes` is configurable through plugin options.

    ```js
    module.exports = {
      plugins: ['@marinda/gatsby-theme-recipes'],
      options: {
        // your site title
        title: "Classic Recipes",
        // your site short title
        shortTitle: "C-Recipes"
      },
    };
    ```

1. Add following to your package.json scripts
    ```json
     "start": "gatsby develop",
     "clean": "gatsby clean",
     "build": "gatsby build",
    ```

Run `npm start` to start the site.

## Usage

### Theme Options



It is recommended to use the Default options, but if your project requires something else you can configure them to your need.

| Option                 |     Default     |                                                             Description                                                             |
| ---------------------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| basePath           |  /  |                                          Root URL where your site will be served from. `/recipes` will change all paths to start with `/recipes`.                                         |
| contentPath         | posts |                                         Location of recipe content files.                                         |
| title           |      Delicious Recipes      |                                                         Your site title, used for the site title, SEO and mobile home screen.                                                         |
| shortTitle            |    Recipes     |                                                   A short title for your site, used for mobile home screen.                                                   |
| iconPath               |        default icon        |                      Path to the icon to be used for the favicon and web manifest. For example `'src/images/favicon.png'`. For best results provide a 512x512 square.                      |

#### Example usage

Recommended example usage
```js
// gatsby-config.js
module.exports = {
  plugins: ['@marinda/gatsby-theme-recipes'],
  options: {
      // your site title
      title: "Classic Recipes",
      // your site short title
      shortTitle: "C-Recipes"
      // the path to your icon file
      iconPath: './src/images/favicon.png'
    },
};
```

### Additional Configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`.

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for SEO
    description: 'My site description...',
    // Used for SEO. Do not include a trailing slash
    url: 'https://www.example.com',
    // Site image used for social sharing, image should live in the 'static' folder
    image: "/images/og-image.jpg",
    // Used for SEO
    author: 'J Hollyhock',
    // Used for an optional intro section at the top of the recipes template
    intro: 'Classic recipes you’ll want to keep making.',
    // Used for the top navigation links
    menuLinks: [
      {
        name: 'About',
        slug: '/about/',
      }
    ],
    // Used for the links in the footer
    footerLinks: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/recipes',
      },
    ],
  },
}
```

### Exported components

#### `StyledParagraph`

Introduction text that captures your reader's attention and entices them to read the rest of the recipe instructions.

#### Example usage in MDX

In any MDX file:

```mdx
import { StyledParagraph } from '@marinda/gatsby-theme-recipes';

<StyledParagraph>These delicious choc-chip cookies are crispy on the outside and chewy on the inside.</StyledParagraph>
```

#### Example usage in React components

In any React component:

```jsx
import React from 'react';
import { StyledParagraph } from '@marinda/gatsby-theme-recipes';

export default () => (
  <div>
    <StyledParagraph>These delicious choc-chip cookies are crispy on the outside and chewy on the inside.</StyledParagraph>
  </div>
);
```

#### How to shadow this component

If you want to use [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) with this component, create a file at the following path in your site:

```
src/@marinda/gatsby-theme-recipes/components/StyledParagraph.js
```

## If you like it, please rate it

If you enjoy using it, please star it!

## Feedback

Send me an [email](mailto:hello@marinda.me), or create an [issue](https://github.com/mariiinda/gatsby-theme-recipes/issues).