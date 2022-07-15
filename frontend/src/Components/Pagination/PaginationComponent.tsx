import { Select } from '@chakra-ui/react';
import React from 'react';

type Params = {
  pageElement: React.ReactNode,
};

export default function PaginationComponent(params: Params) {
  const { pageElement } = params;

  return (
    <div className="flex w-full flex-row items-center justify-end gap-8">
      <div className="flex flex-row items-center">
        <p className="mr-4 whitespace-nowrap">Shows per page</p>
        <Select id="pagination-total" name="pagination-total">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Select>
      </div>
      <div className="flex flex-row items-center">
        <p className="mr-4 whitespace-nowrap">Page</p>
        <Select id="pagination-page" name="pagination-page">
          {pageElement}
        </Select>
      </div>
    </div>
  );
}
