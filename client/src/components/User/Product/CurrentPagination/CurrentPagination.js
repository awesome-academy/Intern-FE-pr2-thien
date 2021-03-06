import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// Actions
import { changePage } from "redux/actions/user/filter";

import { limit } from "constants/index";

const CurrentPagination = () => {
  const { total } = useSelector((state) => state["user/product"]);
  const {
    filter: { page },
  } = useSelector((state) => state["user/filter"]);

  const dispatch = useDispatch();

  const handleChangePage = (currentPage) => {
    if (currentPage !== page) dispatch(changePage(currentPage));
  };

  const totalPages = Math.ceil(total / limit);
  let result = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      result.push(
        <PaginationItem active={i === page}>
          <PaginationLink
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleChangePage(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    if (page === 1 || page === 2) {
      // console.log("DUNG 1");
      for (let i = 1; i <= 5; i++) {
        result.push(
          <PaginationItem active={i === page}>
            <PaginationLink
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                handleChangePage(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else if (page === totalPages || page === totalPages - 1) {
      for (let i = totalPages - 4; i <= totalPages; i++) {
        result.push(
          <PaginationItem active={i === page}>
            <PaginationLink
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                handleChangePage(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      let arr = [page - 2, page - 1, page, page + 1, page + 2];
      result = arr.map((item) => (
        <PaginationItem active={item === page}>
          <PaginationLink
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleChangePage(item);
            }}
          >
            {item}
          </PaginationLink>
        </PaginationItem>
      ));
    }
  }

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={page === 1}>
        <PaginationLink
          previous
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            handleChangePage(page - 1);
          }}
        />
      </PaginationItem>
      {result.map((item) => item)}
      <PaginationItem disabled={page === totalPages}>
        <PaginationLink
          next
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            handleChangePage(page + 1);
          }}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default CurrentPagination;
