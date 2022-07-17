import { AxiosResponse } from 'axios';
import { map, range } from 'ramda';
import { useEffect, useMemo } from 'react';
import BookAPI from '../../../API/BookAPI';
import EntitySorter from '../../../Functions/Helpers/EntitySorter';
import ManageEntityViewModel from '../../../Functions/Interfaces/ManageEntityViewModel';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import ManageBookMapper from '../../../Functions/Mappers/ManageBookMapper';
import BookEntity from '../../../Types/Entities/BookEntity';
import useEntityDataHolder, { EntityFilterByQuery } from '../EntityDataHolder';

function generatePageElement(upperLimit: number) {
  const intRange = range(1, upperLimit);
  const element = intRange.map((value) => (
    <option value={value}>{value}</option>
  ));

  return element;
}

export default function useManageBookViewModel(): ManageEntityViewModel {
  const queryFilter:
  EntityFilterByQuery<BookEntity> = (query: string) => (value) => value.title.toLowerCase().includes(query.toLowerCase());

  const dataHolder = useEntityDataHolder<BookEntity>(undefined, queryFilter);

  const onRefetchDataSuccess = (response: AxiosResponse) => {
    const data = map(EntityMapper.book, response.data);
    dataHolder.setData(data);
  };

  const fetchBooks = () => BookAPI
    .get()
    .then(onRefetchDataSuccess, console.log);

  useEffect(() => { fetchBooks(); }, []);

  const setSortBy = (value: string) => {
    switch (value) {
      case 'name': {
        dataHolder.setSortBy(() => EntitySorter.byName);
        break;
      }
      default: {
        dataHolder.setSortBy(() => EntitySorter.byName);
        break;
      }
    }
  };

  const mapper = ManageBookMapper.curriedTableRow(dataHolder.startIndex);
  const booksElement = useMemo(
    () => dataHolder.entityData.map(mapper),
    [dataHolder.entityData],
  );

  const sortByElements = useMemo(() => (
    <>
      <option value="name">Name</option>
      <option value="author">Author</option>
      <option value="publisher">Publisher</option>
    </>
  ), []);

  const pageElements = useMemo(
    () => generatePageElement(dataHolder.totalPage),
    [dataHolder.totalPage],
  );

  return {
    curriedEntitiesElement: booksElement,
    pageElements,
    sortByElements,
    refetchData: fetchBooks,
    setPage: dataHolder.setPage,
    setQuery: dataHolder.setQuery,
    setShowsPerPage: dataHolder.setShowsPerPage,
    setSortBy,
    setSortOrder: dataHolder.setSortOrder,
  };
}
