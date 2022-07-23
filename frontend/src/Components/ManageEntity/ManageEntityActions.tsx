import { Button, Select } from '@chakra-ui/react';
import React, { FormEvent } from 'react';
import _ from 'lodash';
import SearchbarComponent from '../Searchbar/SearchbarComponent';
import SortOrder from '../../Types/SortOrder';
import HtmlHelper from '../../Functions/Helpers/HtmlHelper';

type Params = {
  sortByElement: any,
  onCreateClick: React.MouseEventHandler,
  fetchData: (params: any) => void,
};

export default function ManageEntityActions(params: Params) {
  const {
    sortByElement, onCreateClick, fetchData,
  } = params;

  const formatSortBy = (item: string) => (
    _.capitalize(item.replaceAll('_', ' '))
  );

  const mappedSortBy = sortByElement?.map((element: string) => (
    <option value={element}>{formatSortBy(element)}</option>
  ));

  const sendin = (e: FormEvent) => {
    e.preventDefault();
    const formData = HtmlHelper.formDataToJson('enti');
    fetchData(formData);
  };

  return (
    <form id="enti" className="my-8 flex w-full flex-row gap-4" onSubmit={sendin}>
      <SearchbarComponent />
      <Select
        id="order-by"
        name="order-by"
        placeholder="Sort By"
        defaultValue="name"
        w="20%"
        onChange={sendin}
      >
        {mappedSortBy}
      </Select>
      <Select
        id="order-direction"
        name="order-direction"
        placeholder="Sort Order"
        defaultValue="asc"
        w="20%"
        onChange={sendin}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
      <Button colorScheme="blue" width="10%" onClick={onCreateClick}>
        Create
      </Button>
    </form>
  );
}
