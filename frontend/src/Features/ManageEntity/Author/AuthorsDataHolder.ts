import {
  sort, slice, reverse, filter, compose,
} from 'ramda';
import { useEffect, useState } from 'react';
import AuthorSorter from '../../../Functions/Helpers/AuthorSorter';
import IntBiFunction from '../../../Functions/Interfaces/IntBiFunction';
import AuthorEntity from '../../../Types/Entities/AuthorEntity';
import SortOrder from '../../../Types/SortOrder';

export default function useAuthorsDataHolder() {
  const [authorsData, setAuthorsData] = useState<AuthorEntity[]>([]);
  const [preparedData, setPreparedData] = useState<AuthorEntity[]>([]);

  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortBy, setSortBy] = useState<IntBiFunction<AuthorEntity>>(() => AuthorSorter.byName);
  const [showsPerPage, setShowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const totalPage = (authorsData.length / showsPerPage) + 1;

  const setData = (entities: AuthorEntity[]) => {
    setAuthorsData(entities);
    setPreparedData(entities);
  };

  const filterByQuery = (value: AuthorEntity) => value.name.toLowerCase().includes(
    query.toLowerCase(),
  );

  const sortOrderFunc = (data: AuthorEntity[]) => (sortOrder === 'asc' ? data : reverse(data));

  useEffect(() => {
    if (authorsData.length === 0) return;
    const offset = (showsPerPage * page) - showsPerPage;
    const sliceByOffset = slice(offset, offset + showsPerPage);

    const filterPipeline = compose(
      sortOrderFunc,
      sort(sortBy),
      filter(filterByQuery),
    );

    let data = filterPipeline(authorsData);
    data = sliceByOffset(data);
    setPreparedData(data);
  }, [authorsData, query, page, showsPerPage, sortBy, sortOrder]);

  return {
    authorsData: preparedData,
    setData,
    setQuery,
    setSortBy,
    setSortOrder,
    showsPerPage,
    setShowsPerPage,
    page,
    setPage,
    totalPage,
  };
}
