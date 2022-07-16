import { Select } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { ChangeEventHandler } from 'react';

type Params = {
  pageElement: React.ReactNode,
  onSubmit: () => void,
};

export default function PaginationComponent(params: Params) {
  const { pageElement, onSubmit } = params;

  const formik = useFormik({
    initialValues: {
      'pagination-total': 10,
      'pagination-page': 1,
    },
    onSubmit,
  });

  const paginationChange: ChangeEventHandler = (event) => {
    formik.handleChange(event);
    formik.handleSubmit();
  };

  return (
    <div className="flex w-full flex-row items-center justify-end gap-8">
      <div className="flex flex-row items-center">
        <p className="mr-4 whitespace-nowrap">Shows per page</p>
        <Select
          id="pagination-total"
          name="pagination-total"
          value={formik.values['pagination-total']}
          onChange={paginationChange}
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
          id="pagination-page"
          name="pagination-page"
          value={formik.values['pagination-page']}
          onChange={paginationChange}
        >
          {pageElement}
        </Select>
      </div>
    </div>
  );
}
