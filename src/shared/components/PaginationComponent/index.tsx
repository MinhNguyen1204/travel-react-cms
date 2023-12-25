import React from "react";
import classnames from "classnames";
import { DOTS, usePagination } from "hooks/usePagination";

import "./pagination.scss";
const Pagination = (props: PaginationDataType) => {
  const {
    onPageChange = (number) => void 0,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", {
        [className as string]: className,
      })}>
      {/* Left navigation arrow */}
      <li
        className={classnames("pagination-item arrow left", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}>
        <a>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </a>
      </li>
      {paginationRange.map((pageNumber, i) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={i}>
              <a>&#8230;</a>
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={i}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber as number)}>
            <a>{pageNumber}</a>
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames("pagination-item arrow right", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}>
        <a>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
