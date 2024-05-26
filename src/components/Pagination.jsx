import React, { useState, useEffect } from "react";

const Pagination = ({ data, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / itemsPerPage)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5; // Adjust this value for more/less buttons

    const startingPage = Math.max(
      Math.min(
        currentPage - Math.floor(maxVisibleButtons / 2),
        totalPages - maxVisibleButtons + 1
      ),
      1
    );
    const endingPage = Math.min(
      startingPage + maxVisibleButtons - 1,
      totalPages
    );

    for (let i = startingPage; i <= endingPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-button ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="pagination-container">
      <button
        className={`pagination-button ${isFirstPage ? "disabled" : ""}`}
        disabled={isFirstPage}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {renderPaginationButtons()}
      <button
        className={`pagination-button ${isLastPage ? "disabled" : ""}`}
        disabled={isLastPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
