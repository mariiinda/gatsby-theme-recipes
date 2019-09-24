/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import StyledLink from "../components/StyledLink";

const componentCSS = theme => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space[5]}px 0 ${theme.space[2]}px;
`;

const linkCSS = theme => css`
  display: inline-block;
  padding: 0 ${theme.space[1]}px;
  margin: 0 ${theme.space[2]}px;
`;

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div css={theme => componentCSS(theme)}>
      {!isFirst && (
        <StyledLink to={prevPage} rel="prev" css={theme => linkCSS(theme)}>
          ← Previous Page
        </StyledLink>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <StyledLink
          key={`pagination-number${i + 1}`}
          to={`/${i === 0 ? "" : i + 1}`}
          css={theme => linkCSS(theme)}
        >
          {i + 1}
        </StyledLink>
      ))}
      {!isLast && (
        <StyledLink to={nextPage} rel="next" css={theme => linkCSS(theme)}>
          Next Page →
        </StyledLink>
      )}
    </div>
  );
};
export default Pagination;
