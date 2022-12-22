import React from "react";

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
          <div key={number}>
            <a onClick={() => paginate(number)} href="!#">
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
