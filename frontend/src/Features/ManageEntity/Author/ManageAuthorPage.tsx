import {
  Button,
  Divider, Input, InputGroup, InputLeftElement, Select, Table,
  TableContainer, Tbody, Th, Thead, Tr,
} from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';
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

function SearchBarComponent() {
  return (
    <InputGroup w="50%">
      <InputLeftElement pointerEvents="none">
        <SearchIcon className="h-6 w-6 stroke-gray-500" />
      </InputLeftElement>
      <Input type="text" placeholder="J.K. Rowling" />
    </InputGroup>
  );
}

function ManageAuthorActionsComponent(props: any) {
  const { sortByElement } = props;

  return (
    <div className="my-8 flex w-full flex-row gap-4">
      <SearchBarComponent />
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

function PaginationComponent(props: any) {
  const { pageElement } = props;

  return (
    <div className="flex w-full flex-row items-center justify-end gap-8">
      <div className="flex flex-row items-center">
        <p className="mr-4 whitespace-nowrap">Shows per page</p>
        <Select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Select>
      </div>
      <div className="flex flex-row items-center">
        <p className="mr-4 whitespace-nowrap">Page</p>
        <Select>
          {pageElement}
        </Select>
      </div>
    </div>
  );
}

function BaseTableComponent(props: any) {
  const { entity, theadElement, tbodyElements } = props;

  return (
    <>
      <p className="font-roboto mb-4 text-gray-500">{`0 ${entity} selected from 24 ${entity}s found.`}</p>
      <TableContainer border="1px" borderColor="gray.200" rounded="xl" marginBottom="2rem">
        <Table variant="striped">
          <Thead>
            {theadElement}
          </Thead>
          <Tbody>
            {tbodyElements}
          </Tbody>
        </Table>
      </TableContainer>
    </>
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
        <ManageAuthorActionsComponent sortByElement={viewModel.sortByElement} />
        <ManageAuthorTableComponent tbodyElements={viewModel.authorsElement} />
        <PaginationComponent pageElement={viewModel.pageElement} />
      </div>
    </BasePage>
  );
}
