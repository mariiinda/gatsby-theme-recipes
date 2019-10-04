/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";
import { Link } from "gatsby";
import { Button } from "@marinda/react-styled-buttons";

import StyledLink from "../components/StyledLink";

const componentCSS = theme => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space[5]}px 0 ${theme.space[2]}px;
`;

const ulCSS = css`
  padding: 0;
`;

const linkCSS = theme => css`
  position: relative;
  display: inline-block;
  padding: 0 ${theme.space[1]}px 0 ${theme.space[2]}px;
  margin: 0 ${theme.space[1]}px;
  text-decoration: none;
  list-style: none;

  &:after {
    position: absolute;
    top: 0;
    right: -${theme.space[2]}px;
    content: "|";
    display: block;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`;

const buttonCSS = theme => css`
  text-decoration: none;
  margin: 0 ${theme.space[3]}px;
  text-transform: capitalize;
  color: ${theme.colors.text};
  background: ${theme.colors.muted};

  &:hover {
    color: ${theme.colors.background};
    background: ${theme.colors.primary};
  }

  &.active {
    color: ${theme.colors.background};
    background: ${theme.colors.primary};
  }

  &:focus {
    box-shadow: 0 0px 8px ${theme.colors.primary},
      0 0px 8px ${theme.colors.primary};
  }
`;

const Pagination = ({ currentPage, numPages, basePath = "/" }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const prevPagePath = `${basePath}${prevPage}`;
  const nextPage = (currentPage + 1).toString();
  const nextPagePath = `${basePath}${nextPage}`;
  const isOnePage = isFirst && isLast;

  return (
    <Fragment>
      {!isOnePage && (
        <nav aria-label="pagination" css={theme => componentCSS(theme)}>
          {!isFirst && (
            <Button
              as={Link}
              to={prevPagePath}
              rel="prev"
              size="small"
              css={theme => buttonCSS(theme)}
              variant="primary"
            >
              ← Previous Page
            </Button>
          )}
          <ul css={ulCSS}>
            {Array.from({ length: numPages }, (_, i) => (
              <li
                css={theme => linkCSS(theme)}
                key={`pagination-number${i + 1}`}
              >
                <StyledLink to={`${basePath}${i === 0 ? "" : i + 1}`}>
                  {i + 1}
                </StyledLink>
              </li>
            ))}
          </ul>
          {!isLast && (
            <Button
              as={Link}
              to={nextPagePath}
              rel="next"
              size="small"
              css={theme => buttonCSS(theme)}
              variant="primary"
            >
              Next Page →
            </Button>
          )}
        </nav>
      )}
    </Fragment>
  );
};
export default Pagination;
