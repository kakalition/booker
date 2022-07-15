import {
  Button,
  Checkbox,
  Divider, Input, InputGroup, InputLeftElement, Select, Table,
  TableContainer, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';
import { PencilIcon, SearchIcon, TrashIcon } from '@heroicons/react/outline';
import { useEffect, useMemo, useState } from 'react';
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

export default function ManageAuthorPage() {
  const viewModel = useManageAuthorViewModel();

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageAuthorHeader />
        <div className="my-8 flex w-full flex-row gap-4">
          <InputGroup w="50%">
            <InputLeftElement pointerEvents="none">
              <SearchIcon className="h-6 w-6 stroke-gray-500" />
            </InputLeftElement>
            <Input type="text" placeholder="J.K. Rowling" />
          </InputGroup>
          <Select placeholder="Sort By" w="20%">
            <option value="name">Name</option>
            <option value="birth-date">Birth date</option>
            <option value="total-books">Total books</option>
            <option value="total-copies-owned">Total copies owned</option>
            <option value="currently-borrowed">Currently borrowed</option>
          </Select>
          <Select placeholder="Sort Order" w="20%">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </Select>
          <Button colorScheme="blue" width="10%">
            Create
          </Button>
        </div>
        <p className="font-roboto mb-4 text-gray-500">0 author selected from 24 authors found.</p>
        <TableContainer border="1px" borderColor="gray.200" rounded="xl">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th w="30%">Name</Th>
                <Th w="20%%">Birth date</Th>
                <Th w="13%">Total books</Th>
                <Th w="13%">Total copies owned</Th>
                <Th w="13%">Currently borrowed</Th>
                <Th w="10%">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {viewModel.authorsElement}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </BasePage>
  );
}
