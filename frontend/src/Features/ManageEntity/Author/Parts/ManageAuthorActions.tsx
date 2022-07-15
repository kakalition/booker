import { Button, Select } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import SearchbarComponent from '../../../../Components/Searchbar/SearchbarComponent';

type Params = {
  sortByElement: React.ReactNode
  onSubmit: (values: any) => void,
  onCreateClick: React.MouseEventHandler,
};

export default function ManageAuthorActions(params: Params) {
  const { sortByElement, onSubmit, onCreateClick } = params;

  const formik = useFormik({
    initialValues: {
      'sort-by': 'name',
      'sort-order': 'asc',
    },
    onSubmit,
  });

  const onChange: React.ChangeEventHandler = (event) => {
    formik.handleChange(event);
    formik.handleSubmit();
  };

  return (
    <div className="my-8 flex w-full flex-row gap-4">
      <SearchbarComponent
        onSubmit={onSubmit}
      />
      <Select
        id="sort-by"
        name="sort-by"
        placeholder="Sort By"
        value={formik.values['sort-by']}
        onChange={onChange}
        w="20%"
      >
        {sortByElement}
      </Select>
      <Select
        id="sort-order"
        name="sort-order"
        placeholder="Sort Order"
        value={formik.values['sort-order']}
        onChange={onChange}
        w="20%"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
      <Button colorScheme="blue" width="10%" onClick={onCreateClick}>
        Create
      </Button>
    </div>
  );
}
