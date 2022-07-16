import {
  sort, slice, reverse, filter, compose,
} from 'ramda';
import { useEffect, useState } from 'react';
import IntBiFunction from '../../Functions/Interfaces/IntBiFunction';
import Predicate from '../../Functions/Interfaces/Predicate';
import SortOrder from '../../Types/SortOrder';

export type EntityFilterByQuery<T> = (query: string) => Predicate<T>;

const baseFilterByQuery: EntityFilterByQuery<any> = (query: string):
Predicate<any> => (value: any) => value.name.toLowerCase().includes(query.toLowerCase());

const baseSortName: IntBiFunction<any> = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

export default function useEntityDataHolder<T>(
  initialSorter: IntBiFunction<T> = baseSortName,
  filterByQuery: EntityFilterByQuery<T> = baseFilterByQuery,
) {
  const [entityData, setEntityData] = useState<T[]>([]);
  const [preparedData, setPreparedData] = useState<T[]>([]);

  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortBy, setSortBy] = useState<IntBiFunction<T>>(() => initialSorter);
  const [showsPerPage, setShowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const totalPage = (entityData.length / showsPerPage) + 1;
  const startIndex = (page * showsPerPage) - showsPerPage;

  const setData = (entities: T[]) => {
    setEntityData(entities);
    setPreparedData(entities);
  };

  const sortOrderFunc = (data: T[]) => (sortOrder === 'asc' ? data : reverse(data));

  const internalFilterByQuery = filterByQuery(query);

  useEffect(() => {
    if (entityData.length === 0) return;
    const offset = (showsPerPage * page) - showsPerPage;
    const sliceByOffset = slice(offset, offset + showsPerPage);

    const filterPipeline = compose(
      sortOrderFunc,
      sort(sortBy),
      filter(internalFilterByQuery),
    );

    let data = filterPipeline(entityData);
    data = sliceByOffset(data);
    setPreparedData(data);
  }, [entityData, query, page, showsPerPage, sortBy, sortOrder]);

  return {
    entityData: preparedData,
    setData,
    setQuery,
    setSortBy,
    setSortOrder,
    showsPerPage,
    setShowsPerPage,
    page,
    setPage,
    totalPage,
    startIndex,
  };
}
