import { AxiosResponse } from 'axios';
import {
  map, sort, slice, range,
} from 'ramda';
import { useEffect, useMemo, useState } from 'react';
import AuthorAPI from '../../../API/AuthorAPI';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import ManageAuthorMapper from '../../../Functions/Mappers/ManageAuthorMapper';
import AuthorEntity from '../../../Types/Entities/AuthorEntity';

function useAuthorsDataHolder() {
  const [authorsData, setAuthorsData] = useState<AuthorEntity[]>([]);
  const [preparedData, setPreparedData] = useState<AuthorEntity[]>([]);

  const showsPerPage = 10;

  // Create filter pipeline
  const applySortBy = null;
  const applySortOrder = null;
  const applyPage = (page: number) => {
    const offset = (showsPerPage * page) - showsPerPage - 1;
    const sliced = slice(offset, showsPerPage, authorsData);
    setPreparedData(sliced);
  };

  const totalPage = preparedData.length / showsPerPage;

  const setData = (entities: AuthorEntity[]) => {
    setAuthorsData(entities);
    setPreparedData(entities);
  };

  return {
    authorsData: preparedData,
    setData,
    applySortBy,
    applySortOrder,
    applyPage,
    totalPage,
  };
}

const sortName = (a: AuthorEntity, b: AuthorEntity) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

export default function useManageAuthorViewModel() {
  const dataHolder = useAuthorsDataHolder();

  const onFetchSuccess = (response: AxiosResponse) => {
    const data = map(EntityMapper.author, response.data);
    const sorted = sort(sortName, data);
    dataHolder.setData(sorted);
  };

  const fetchAuthors = () => AuthorAPI
    .get()
    .then(onFetchSuccess, console.log);

  useEffect(() => { fetchAuthors(); }, []);

  const authorsElement = useMemo(
    () => dataHolder.authorsData.map(ManageAuthorMapper.curriedTableRow),
    [dataHolder.authorsData],
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

  const pageElement = useMemo(() => {
    const intRange = range(1, dataHolder.totalPage);
    const element = intRange.map((value) => (
      <option value={value}>{value}</option>
    ));

    return element;
  }, [dataHolder.totalPage]);

  return {
    curriedAuthorsElement: authorsElement,
    sortByElement,
    pageElement,
    onSubmit: fetchAuthors,
  };
}
