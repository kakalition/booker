import { Button, Select } from '@chakra-ui/react';
import React from 'react';
import SearchbarComponent from '../../../../Components/Searchbar/SearchbarComponent';

type Params = {
  sortByElement: React.ReactNode
  onSubmitQuery: (values: any) => void,
};

export default function ManageAuthorActions(params: Params) {
  const { sortByElement, onSubmitQuery } = params;

  return (
    <div className="my-8 flex w-full flex-row gap-4">
      <SearchbarComponent onSubmit={onSubmitQuery} />
      <Select placeholder="Sort By" w="20%">
        {sortByElement}
      </Select>
      <Select placeholder="Sort Order" w="20%">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </Select>
      <Button colorScheme="blue" width="10%">
        Create
      </Button>
    </div>
  );
}
