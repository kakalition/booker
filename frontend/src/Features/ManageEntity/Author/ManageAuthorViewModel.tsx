import { AxiosResponse } from 'axios';
import {
  map, range,
} from 'ramda';
import { useEffect, useMemo } from 'react';
import AuthorAPI from '../../../API/AuthorAPI';
import AuthorSorter from '../../../Functions/Helpers/AuthorSorter';
import ManageEntityViewModel from '../../../Functions/Interfaces/ManageEntityViewModel';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import ManageAuthorMapper from '../../../Functions/Mappers/ManageAuthorMapper';
import AuthorEntity from '../../../Types/Entities/AuthorEntity';
import SortOrder from '../../../Types/SortOrder';
import useEntityDataHolder from '../EntityDataHolder';

export default function useManageAuthorViewModel(): ManageEntityViewModel {
  const dataHolder = useEntityDataHolder<AuthorEntity>();

  const onFetchSuccess = (response: AxiosResponse) => {
    const data = map(EntityMapper.author, response.data);
    dataHolder.setData(data);
  };

  const fetchAuthors = () => AuthorAPI
    .get()
    .then(onFetchSuccess, console.log);

  useEffect(() => { fetchAuthors(); }, []);

  const mapper = ManageAuthorMapper.curriedTableRow(dataHolder.startIndex);
  const authorsElement = useMemo(
    () => dataHolder.entityData.map(mapper),
    [dataHolder.entityData],
  );

  const sortByElements = useMemo(() => (
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

  const pageElements = useMemo(() => {
    const intRange = range(1, dataHolder.totalPage);
    const element = intRange.map((value) => (
      <option value={value}>{value}</option>
    ));

    return element;
  }, [dataHolder.totalPage]);

  return {
    curriedEntitiesElement: authorsElement,
    sortByElements,
    pageElements,
    refetchData: fetchAuthors,
    setQuery: dataHolder.setQuery,
    setPage: dataHolder.setPage,
    setShowsPerPage: dataHolder.setShowsPerPage,
    setSortBy,
    setSortOrder,
  };
}
