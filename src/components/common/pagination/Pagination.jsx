import React from "react";

import paginationPageCalculator, {
  DOT,
  options,
} from "../../../libs/pagination";

import PrevIcon from "../../common/svg/PrevIcon";
import NextIcon from "../../common/svg/NextIcon";

import "./pagination.scss";

const Pagination = ({ total, handleUpdateCurrentPage, currentPage }) => {
  const renderPages = () => {
    const paginationPageList = paginationPageCalculator(total, currentPage);

    return (
      <>
        {paginationPageList?.map((page, index) => {
          return (
            <button
              className={`${currentPage === page ? `pagination__active` : ""} ${
                page === DOT ? "pagination__notAlow" : ""
              }`}
              key={index}
              onClick={() => handleClickButtonNumber(page)}
            >
              {page}
            </button>
          );
        })}
      </>
    );
  };

  const calcultateTotalPage = () => {
    return Math.ceil(total / options.pageSize);
  };

  const handleClickButtonNumber = (page) => {
    handleUpdateCurrentPage(page);
  };

  const handleClickPrev = () => {
    handleUpdateCurrentPage(currentPage - 1);
  };

  const handleClickNext = () => {
    handleUpdateCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="pagination">
        <button
          className={currentPage === 1 ? "pagination__disabled" : ""}
          disabled={currentPage === 1}
          onClick={handleClickPrev}
        >
          <PrevIcon />
        </button>
        {renderPages()}
        <button
          className={`${
            currentPage === calcultateTotalPage() ? "pagination__disabled" : ""
          } "style.pagination__next"`}
          disabled={currentPage === calcultateTotalPage()}
          onClick={handleClickNext}
        >
          <NextIcon />
        </button>
      </div>
    </>
  );
};

export default Pagination;
