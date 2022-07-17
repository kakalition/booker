import { Button, Select } from '@chakra-ui/react';
import React from 'react';
import SearchbarComponent from '../Searchbar/SearchbarComponent';
import SortOrder from '../../Types/SortOrder';

type Params = {
  sortByElement: React.ReactNode
  onSubmit: (values: any) => void,
  onCreateClick: React.MouseEventHandler,
  setQuery: (value: string) => void,
  setSortBy: (value: string) => void,
  setSortOrder: (value: SortOrder) => void,
};

export default function ManageEntityActions(params: Params) {
  const {
    sortByElement, onSubmit, onCreateClick,
    setSortBy, setSortOrder, setQuery,
  } = params;

  return (
    <div className="my-8 flex w-full flex-row gap-4">
      <SearchbarComponent
        onChange={setQuery}
        onSubmit={onSubmit}
      />
      <Select
        id="sort-by"
        name="sort-by"
        placeholder="Sort By"
        defaultValue="name"
        onChange={(event) => setSortBy(event.target.value)}
        w="20%"
      >
        {sortByElement}
      </Select>
      <Select
        id="sort-order"
        name="sort-order"
        placeholder="Sort Order"
        defaultValue="asc"
        onChange={(event) => setSortOrder(event.target.value as SortOrder)}
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
