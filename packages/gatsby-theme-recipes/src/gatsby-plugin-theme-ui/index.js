/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */

export default {
  colors: {
    text: "#120126",
    background: "#fff",
    primary: "#f04530",
    secondary: "#663399",
    accent: "#017c9e",
    muted: "#FBF1E0"
  },
  fonts: {
    body: "'Raleway', Arial, Helvetica, sans-serif",
    heading: "'Cardo', Georgia, 'Times New Roman', Times, serif",
    monospace: "'Courier New', Courier, monospace"
  },
  fontSizes: [
    "0.625rem",
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem"
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontWeights: {
    body: 400,
    heading: "normal",
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  radii: ["2px", "5px", "50%"],
  zIndices: [10, 20, 100],
  shadows: {
    default: "0 .5rem 1rem rgba(0, 0, 0, .15)",
    sm: "0 .125rem .25rem rgba(0, 0, 0, .075)",
    lg: "0 1rem 3rem rgba(0, 0, 0, .175)"
  },
  breakpoints: ["576px", "768px", "992px", "1200px"],
  sizes: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
  },
  styles: {
    root: {
      color: "text",
      bg: "background",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 3,
      "*::selection": {
        bg: "muted",
        color: "primary"
      }
    },
    a: {
      color: "inherit",
      textDecoration: "none",
      transition: "color .3s ease-in-out",
      ":hover": {
        color: "primary"
      }
    },
    img: {
      width: "100%",
      height: "auto"
    },
    Layout: {
      pt: 2,
      border: `30px solid`,
      borderColor: "muted",
      display: "flex"
    },
    Header: {
      position: "relative",
      color: "text",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: 2,
      mb: 4,
      pb: [3, 5],
      borderBottom: "1px solid transparent",
      borderColor: "muted",
      h1: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [6, 7, 8],
        lineHeight: "heading",
        fontFamily: "heading",
        fontWeight: "heading",
        letterSpacing: "heading"
      },
      nav: {
        alignSelf: "flex-end"
      }
    },
    Container: {
      maxWidth: "xl",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      h1: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [5, 6, 7],
        lineHeight: "heading",
        fontFamily: "heading",
        fontWeight: "heading",
        letterSpacing: "heading",
        textTransform: "capitalize"
      },
      h2: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [3, 4, 6],
        lineHeight: "heading",
        fontFamily: "heading",
        fontWeight: "heading",
        letterSpacing: "heading",
        textTransform: "capitalize"
      },
      h3: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [4, 5],
        lineHeight: "heading",
        fontFamily: "heading",
        fontWeight: "heading",
        letterSpacing: "heading",
        textTransform: "capitalize"
      },
      ul: {
        maxWidth: "650px"
      },
      table: {
        border: "1px solid transparent",
        borderLeft: "none",
        borderRight: "none",
        borderColor: "muted",
        width: "100%",
        breakInside: "avoid",
        py: 4,
        px: 4,
        th: {
          fontWeight: "normal",
          fontSize: 2,
          textTransform: "capitalize",
          textAlign: "left",
          px: 2
        },
        td: {
          fontWeight: "normal",
          fontSize: 4,
          textAlign: "left",
          px: 2
        }
      }
    },
    Main: {
      display: "flex",
      flexDirection: "column"
    },
    Footer: {
      position: "relative",
      color: "text",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      mt: 4,
      mb: 2,
      pt: [3, 4],
      borderTop: "1px solid transparent",
      borderColor: "muted",
      nav: {
        position: "relative",
        a: {
          mr: 3
        }
      }
    }
  }
};
