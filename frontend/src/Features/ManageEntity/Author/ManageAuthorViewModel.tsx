import { AxiosResponse } from 'axios';
import {
  map, sort, slice, range, reverse,
} from 'ramda';
import { useEffect, useMemo, useState } from 'react';
import AuthorAPI from '../../../API/AuthorAPI';
import AuthorSorter from '../../../Functions/Helpers/AuthorSorter';
import IntBiFunction from '../../../Functions/Interfaces/IntBiFunction';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import ManageAuthorMapper from '../../../Functions/Mappers/ManageAuthorMapper';
import AuthorEntity from '../../../Types/Entities/AuthorEntity';
import SortOrder from '../../../Types/SortOrder';

function useAuthorsDataHolder() {
  const [authorsData, setAuthorsData] = useState<AuthorEntity[]>([]);
  const [preparedData, setPreparedData] = useState<AuthorEntity[]>([]);

  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortBy, setSortBy] = useState<IntBiFunction<AuthorEntity>>(() => AuthorSorter.byName);
  const [showsPerPage, setShowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const totalPage = (authorsData.length / showsPerPage) + 1;

  const setData = (entities: AuthorEntity[]) => {
    setAuthorsData(entities);
    setPreparedData(entities);
  };

  useEffect(() => {
    if (authorsData.length === 0) return;
    const offset = (showsPerPage * page) - showsPerPage;
    let data = sort(sortBy, authorsData);
    data = sortOrder === 'asc' ? data : reverse(data);
    data = slice(offset, offset + showsPerPage, data);
    setPreparedData(data);
  }, [authorsData, page, showsPerPage, sortBy, sortOrder]);

  return {
    authorsData: preparedData,
    setData,
    setSortBy,
    setSortOrder,
    showsPerPage,
    setShowsPerPage,
    page,
    setPage,
    totalPage,
  };
}

export default function useManageAuthorViewModel() {
  const dataHolder = useAuthorsDataHolder();

  const onFetchSuccess = (response: AxiosResponse) => {
    const data = map(EntityMapper.author, response.data);
    dataHolder.setData(data);
  };

  const fetchAuthors = () => AuthorAPI
    .get()
    .then(onFetchSuccess, console.log);

  useEffect(() => { fetchAuthors(); }, []);

  const startIndex = (dataHolder.page * dataHolder.showsPerPage) - dataHolder.showsPerPage;
  const mapper = ManageAuthorMapper.curriedTableRow(startIndex);
  const authorsElement = useMemo(
    () => dataHolder.authorsData.map(mapper),
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

  const setSortBy = (value: string) => {
    switch (value) {
      case 'name': {
        dataHolder.setSortBy(() => AuthorSorter.byName);
        break;
      }
      case 'birth-date': {
        dataHolder.setSortBy(() => AuthorSorter.byBirthDate);
        break;
      }
      default: dataHolder.setSortBy(AuthorSorter.byName);
    }
  };

  const setSortOrder = (value: SortOrder) => {
    dataHolder.setSortOrder(value);
  };

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
    setPage: dataHolder.setPage,
    setShowsPerPage: dataHolder.setShowsPerPage,
    setSortBy,
    setSortOrder,
  };
}
