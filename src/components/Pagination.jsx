import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ currentPage, onChangePage }) => {
   return (
      <ReactPaginate
         className="pagination"
         breakLabel="..."
         nextLabel=">"
         onPageChange={(event) => onChangePage(event.selected + 1)}
         pageRangeDisplayed={8}
         pageCount={5}
         previousLabel="<"
         forcePage={currentPage - 1}
         renderOnZeroPageCount={true}
      />
   )
}

export default Pagination;