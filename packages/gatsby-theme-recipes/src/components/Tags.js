/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import { Button } from "@marinda/react-styled-buttons";

const componentCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const buttonCSS = theme => css`
  text-decoration: none;
  text-transform: capitalize;
  margin: 0 8px;
  color: ${theme.colors.text};
  background: ${theme.colors.muted};
  margin-bottom: 10px;

  &:hover {
    color: ${theme.colors.background};
    background: ${theme.colors.secondary};
  }

  &.active {
    color: ${theme.colors.background};
    background: ${theme.colors.secondary};
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.colors.secondary},
      0 0px 8px ${theme.colors.secondary};
  }
`;

const Tags = ({ basePath = "/", tags = [] }) => {
  return (
    <nav css={componentCSS}>
      {
        <Button
          key="all"
          css={theme => buttonCSS(theme)}
          as={Link}
          to={basePath}
          size="small"
          activeClassName="active"
        >
          All
        </Button>
      }
      {tags &&
        tags.map(({ tag }) => (
          <Button
            key={tag}
            css={theme => buttonCSS(theme)}
            as={Link}
            to={`/tags/${tag}`}
            size="small"
            activeClassName="active"
          >
            {tag}
          </Button>
        ))}
    </nav>
  );
};

export default Tags;
