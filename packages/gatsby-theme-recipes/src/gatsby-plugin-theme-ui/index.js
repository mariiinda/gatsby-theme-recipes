/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */

export default {
  colors: {
    text: "#362101",
    background: "#fff",
    primary: "#d61c04",
    secondary: "#862E9C",
    accent: "#017c9e",
    muted: "#F9E7C9",
    grey: "#F0EEEA",
    darkGrey: "#35332F"
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
  letterSpacings: {
    heading: "-0.05em",
    caps: "0.1em"
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
      textTransform: "capitalize"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "caps"
    },
    large: {
      fontSize: [3, 4, 5],
      mb: [3, 4]
    },
    small: {
      fontSize: [1, 2]
    }
  },
  listItem: {
    ingredient: {
      pb: 2,
      pl: 2,
      borderBottom: "2px dotted",
      borderColor: "muted",
      display: "inline-block",
      mb: 0
    }
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
  markdownWrappers: {
    pages: {
      "*": {
        mb: 3,
        fontSize: [3, 4],
        maxWidth: "md"
      },
      h1: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [6, 7],
        variant: "text.heading"
      },
      h2: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h3: {
        margin: 0,
        mt: 3,
        color: "text",
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h4: {
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h5: {
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h6: {
        fontSize: [5, 6],
        variant: "text.heading"
      },
      ul: {
        mb: 4
      },
      ol: {
        mb: 4
      }
    },
    recipes: {
      "*": {
        mb: 3,
        fontSize: [3, 4]
      },
      h1: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [6, 7],
        variant: "text.heading"
      },
      h2: {
        margin: 0,
        mt: 4,
        color: "text",
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h3: {
        margin: 0,
        mt: 3,
        color: "text",
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h4: {
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h5: {
        fontSize: [5, 6],
        variant: "text.heading"
      },
      h6: {
        fontSize: [5, 6],
        variant: "text.heading"
      },
      ul: {
        maxWidth: "md",
        px: 1,
        listStyle: "inside",
        p: {
          display: "inline-block"
        },
        li: {
          mb: [1, 2],
          p: {
            mb: [1, 2]
          }
        }
      },
      p: {
        maxWidth: "md",
        mb: [3, 4]
      },
      table: {
        border: "1px solid transparent",
        borderLeft: "none",
        borderRight: "none",
        borderColor: "muted",
        width: ["100%", "auto"],
        minWidth: "48%",
        tableLayout: "fixed",
        py: [2, 4],
        px: [0, 4],
        th: {
          textAlign: "center",
          fontWeight: "normal",
          fontSize: [1, 4],
          textTransform: "capitalize",

          px: [0, 2],
          wordWrap: "break-word"
        },
        td: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: [1, 4],

          px: [0, 2],
          wordWrap: "break-word"
        }
      },
      ".gatsby-resp-image-wrapper": {
        width: ["90%", "100%"],
        my: [3, 4],
        img: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%"
        }
      }
    }
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
        color: "text"
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
      borderWidth: ["10px", "32px"],
      borderStyle: "solid",
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
      padding: [3, 4, 5]
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
          position: "relative",
          mr: 3,
          display: "inline-block",
          "&:after": {
            position: "absolute",
            top: 0,
            right: "-10px",
            content: "'|'",
            display: ["none", "block"]
          },
          "&:last-child": {
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  }
};
