import React from "react";
import "./Pagination.scss";

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {/* <div>&laquo;</div> */}
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </div>
        ))}
        {/* <div>&raquo;</div> */}
      </ul>
    </nav>
  );
};

export default Pagination;
