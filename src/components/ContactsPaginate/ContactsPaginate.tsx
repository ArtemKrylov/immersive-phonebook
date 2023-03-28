import React from "react";
import ReactPaginate from "react-paginate";
import { ContactsPaginateStyled } from "./ContactsPaginate.styled";

interface ContactsPaginateInterface {
  pageCount: number;
  setPage: (page: number) => void;
}

const ContactsPaginate: React.FC<ContactsPaginateInterface> = ({
  pageCount,
  setPage,
}) => {
  function handlePageClick(event: any) {
    const newPage = event.selected + 1;
    setPage(newPage);
  }
  return (
    <ContactsPaginateStyled>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        className="contactsPaginate"
      />
    </ContactsPaginateStyled>
  );
};

export default ContactsPaginate;
