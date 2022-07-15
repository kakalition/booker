import { Button, Select } from '@chakra-ui/react';
import React from 'react';
import SearchbarComponent from '../../../../Components/Searchbar/SearchbarComponent';

type Params = {
  sortByElement: React.ReactNode
  onSubmit: (values: any) => void,
  onCreateClick: React.MouseEventHandler,
};

export default function ManageAuthorActions(params: Params) {
  const { sortByElement, onSubmit, onCreateClick } = params;

  return (
    <div className="my-8 flex w-full flex-row gap-4">
      <SearchbarComponent onSubmit={onSubmit} />
      <Select placeholder="Sort By" w="20%">
        {sortByElement}
      </Select>
      <Select placeholder="Sort Order" w="20%">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </Select>
      <Button colorScheme="blue" width="10%" onClick={onCreateClick}>
        Create
      </Button>
    </div>
  );
}
