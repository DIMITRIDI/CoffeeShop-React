import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
   currentPage: number;
   onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
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
      />
   )
}

export default Pagination;