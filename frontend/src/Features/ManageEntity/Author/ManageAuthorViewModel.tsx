import {
  Checkbox, IconButton, Td, Tr,
} from '@chakra-ui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { AxiosResponse } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import AuthorAPI from '../../../API/AuthorAPI';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import ManageAuthorMapper from '../../../Functions/Mappers/ManageAuthorMapper';
import AuthorEntity from '../../../Types/Entities/AuthorEntity';

export default function useManageAuthorViewModel() {
  const [authorsData, setAuthorsData] = useState<AuthorEntity[]>([]);

  const onFetchSuccess = (response: AxiosResponse) => {
    const data = response.data.map((element: any) => EntityMapper.author(element));
    setAuthorsData(data);
  };

  const fetchAuthors = () => AuthorAPI
    .get()
    .then(onFetchSuccess, console.log);

  useEffect(() => { fetchAuthors(); }, []);

  const authorsElement = useMemo(
    () => authorsData.map(ManageAuthorMapper.curriedTableRow),
    [authorsData],
  );

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

  return {
    curriedAuthorsElement: authorsElement,
    sortByElement,
    pageElement,
    onSubmit: fetchAuthors,
  };
}
