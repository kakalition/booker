import { Checkbox, Td, Tr } from '@chakra-ui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { AxiosResponse } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import AuthorAPI from '../../../API/AuthorAPI';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import AuthorEntity from '../../../Types/Entities/AuthorEntity';

export default function useManageAuthorViewModel() {
  const [authorsData, setAuthorsData] = useState<AuthorEntity[]>([]);

  const onFetchSuccess = (response: AxiosResponse) => {
    const data = response.data.map((element: any) => EntityMapper.author(element));
    setAuthorsData(data);
  };

  useEffect(() => {
    AuthorAPI
      .get()
      .then(onFetchSuccess, console.log);
  }, []);

  const authorsElement = useMemo(() => authorsData.map((element) => (
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
  )), [authorsData]);

  const sortByElement = useMemo(() => (
    <>
      <option value="name">Name</option>
      <option value="birth-date">Birth date</option>
      <option value="total-books">Total books</option>
      <option value="total-copies-owned">Total copies owned</option>
      <option value="currently-borrowed">Currently borrowed</option>
    </>
  ), []);

  const pageElement = useMemo(() => (
    <>
      <option value="1">1</option>
      <option value="2">2</option>
    </>
  ), []);

  const onSubmitQuery = (values: any) => alert(values.query);

  return {
    authorsElement,
    sortByElement,
    pageElement,
    onSubmitQuery,
  };
}
