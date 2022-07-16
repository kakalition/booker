import { Select } from '@chakra-ui/react';
import React, { useRef } from 'react';

type Params = {
  pageElement: React.ReactNode,
  setPage: (page: number) => void,
  setShowsPerPage: (value: number) => void,
};

export default function PaginationComponent(params: Params) {
  const {
    pageElement, setPage, setShowsPerPage,
  } = params;

  const showsPerPageRef = useRef<any>();
  const pageRef = useRef<any>();

  return (
    <div className="flex w-full flex-row items-center justify-end gap-8">
      <div className="flex flex-row items-center">
        <p className="mr-4 whitespace-nowrap">Shows per page</p>
        <Select
          ref={showsPerPageRef}
          id="pagination-total"
          name="pagination-total"
          defaultValue="10"
          onChange={(event) => setShowsPerPage(parseInt(event.target.value, 10))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Select>
      </div>
      <div className="flex flex-row items-center">
        <p className="mr-4 whitespace-nowrap">Page</p>
        <Select
          ref={pageRef}
          id="pagination-page"
          name="pagination-page"
          defaultValue="1"
          onChange={(event) => setPage(parseInt(event.target.value, 10))}
        >
          {pageElement}
        </Select>
      </div>
    </div>
  );
}
