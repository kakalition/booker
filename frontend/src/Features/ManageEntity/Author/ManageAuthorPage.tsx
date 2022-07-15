import {
  Button,
  Divider, Input, InputGroup, InputLeftElement, Select, Table,
  TableContainer, Tbody, Th, Thead, Tr,
} from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import SearchbarComponent from '../../../Components/Searchbar/SearchbarComponent';
import BaseTableComponent from '../../../Components/Table/BaseTableComponent';
import BasePage from '../../Components/BasePage';
import useManageAuthorViewModel from './ManageAuthorViewModel';

function ManageAuthorHeader() {
  return (
    <>
      <h1 className="font-inter mb-2 text-4xl font-medium text-black">Manage Author</h1>
      <h2 className="font-roboto mb-6 text-lg text-gray-500">You can see available authors and create new author here.</h2>
      <Divider mb="1.5rem" />
    </>
  );
}

function ManageAuthorActionsComponent(props: any) {
  const { sortByElement } = props;

  return (
    <div className="my-8 flex w-full flex-row gap-4">
      <SearchbarComponent onSubmit={(values) => alert(values.query)} />
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

function ManageAuthorTableComponent(props: any) {
  const { tbodyElements } = props;
  const theadElement = (
    <Tr>
      <Th w="30%">Name</Th>
      <Th w="20%%">Birth date</Th>
      <Th w="13%">Total books</Th>
      <Th w="13%">Total copies owned</Th>
      <Th w="13%">Currently borrowed</Th>
      <Th w="10%">Actions</Th>
    </Tr>
  );

  return (
    <BaseTableComponent
      entity="author"
      theadElement={theadElement}
      tbodyElements={tbodyElements}
    />
  );
}

export default function ManageAuthorPage() {
  const viewModel = useManageAuthorViewModel();

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageAuthorHeader />
        <ManageAuthorActionsComponent
          sortByElement={viewModel.sortByElement}
          searchFormik={viewModel.searchFormik}
        />
        <ManageAuthorTableComponent tbodyElements={viewModel.authorsElement} />
        <PaginationComponent pageElement={viewModel.pageElement} />
      </div>
    </BasePage>
  );
}
