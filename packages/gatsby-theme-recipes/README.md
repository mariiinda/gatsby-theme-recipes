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

![Screenshots of gatsby theme recipes demo site](../../assets/cover.jpgassets/cover.jpg?raw=true)

## [View the Demo](https://recipes-demo.marinda.me/)

## What you get from this theme

- Write recipes in MDX
- Optimized images
- Tags for you recipes
- Customizable Theme-UI theme
- Pagination if recipes per page exceeds 12 items

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @marinda/gatsby-theme-recipes
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ['@marinda/gatsby-theme-recipes'],
    };
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Usage

### Theme Options

| Key                 | Default Value | Description                                                                                                                                      |
| ------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `basePath`          | `/`           | Root URL for all posts.                                                                                                                          |
| `contentPath`       | `/recipes`    | Location of markdown files used for the posts.                                                                                                   |  |
| `iconPath`          | default icon  | Path to the icon to be used for the favicon and web manifest. For example `'src/images/favicon.png'`. For best results provide a 512x512 square. | 

| `title`          | `Delicious Recipes`  | Used for the site title, SEO and mobile home screen | 
| `shortTitle`          | `Recipes`  | Used for mobile home screen | 

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: ['@marinda/gatsby-theme-recipes'],
  options: {
      // basePath defaults to '/'
      basePath: '/',
      // contentPath defaults to 'recipes'
      contentPath: "posts",
      // the path to your icon file
      iconPath: 'src/images/favicon.png',
      // your site title
      title = "Classic Recipes",
      // your site short title
      shortTitle = "C-R"
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
    // Used for SEO
    author: 'John Doe',
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
        url: 'https://www.instagram.com/recipes',
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