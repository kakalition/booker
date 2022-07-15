import {
  Divider, Table, TableContainer, Th, Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
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
]);

export default function ManageAuthorPage() {
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    
  });

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageAuthorHeader />
        <TableContainer>
          <Table variant="striped">
            <Tr>
              <Th>Name</Th>
              <Th>Birth date</Th>
              <Th>Total books</Th>
              <Th>Total copies owned</Th>
              <Th>Currently borrowed</Th>
              <Th />
            </Tr>
          </Table>
        </TableContainer>
      </div>
    </BasePage>
  );
}
