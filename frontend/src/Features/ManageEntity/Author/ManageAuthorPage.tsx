import {
  Button,
  Checkbox,
  Divider, Input, InputGroup, InputLeftElement, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';
import { PencilIcon, SearchIcon, TrashIcon } from '@heroicons/react/outline';
import { useEffect, useMemo, useState } from 'react';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import BasePage from '../../Components/BasePage';

function ManageAuthorHeader() {
  return (
    <>
      <h1 className="font-inter mb-2 text-4xl font-medium text-black">Manage Author</h1>
      <h2 className="font-roboto mb-6 text-lg text-gray-500">You can see available authors and create new author here.</h2>
      <Divider mb="1.5rem" />
    </>
  );
}

const dummyData = () => ([
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
  {
    name: 'J.K. Rowling',
    birth_date: 'July 31, 1965',
    total_books: 20,
    total_copies_owned: 82,
    currently_borrowed: 42,
  },
  {
    name: 'Carl Sagan',
    birth_date: 'November 9, 1934',
    total_books: 10,
    total_copies_owned: 52,
    currently_borrowed: 50,
  },
]);

export default function ManageAuthorPage() {
  const [authorData, setAuthorData] = useState<any[]>([]);

  useEffect(() => {
    const dummyAuthors = dummyData().map((element) => ({
      name: element.name,
      birth_date: element.birth_date,
      total_books: element.total_books,
      total_copies_owned: element.total_copies_owned,
      currently_borrowed: element.currently_borrowed,
    }));

    setAuthorData(dummyAuthors);
  }, []);

  const authorsElement = useMemo(() => authorData.map((element) => (
    <Tr>
      <Td>{element.name}</Td>
      <Td>{element.birth_date}</Td>
      <Td>{element.total_books}</Td>
      <Td>{element.total_copies_owned}</Td>
      <Td>{element.currently_borrowed}</Td>
      <Td>
        <div className="flex flex-row items-center gap-6">
          <PencilIcon className="h-6 w-6 stroke-gray-500" />
          <TrashIcon className="h-6 w-6 stroke-gray-500" />
          <Checkbox size="lg" />
        </div>
      </Td>
    </Tr>
  )), [authorData]);

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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Sort Order" w="20%">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
                <Th w="10%" />
              </Tr>
            </Thead>
            <Tbody>
              {authorsElement}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </BasePage>
  );
}
