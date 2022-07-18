import { AxiosResponse } from 'axios';
import { map, range } from 'ramda';
import { useEffect, useMemo } from 'react';
import PublisherAPI from '../../../API/PublisherAPI';
import EntitySorter from '../../../Functions/Helpers/EntitySorter';
import ManageEntityViewModel from '../../../Functions/Interfaces/ManageEntityViewModel';
import EntityMapper from '../../../Functions/Mappers/EntityMapper';
import ManagePublisherMapper from '../../../Functions/Mappers/ManagePublisherMapper';
import PublisherEntity from '../../../Types/Entities/PublisherEntity';
import SortOrder from '../../../Types/SortOrder';
import useEntityDataHolder from '../EntityDataHolder';

export default function useManagePublisherViewModel(): ManageEntityViewModel {
  const dataHolder = useEntityDataHolder<PublisherEntity>();

  const onFetchDataSuccess = (response: AxiosResponse) => {
    const data = map(EntityMapper.publisher, response.data);
    dataHolder.setData(data);
  };

  const fetchPublishers = () => PublisherAPI
    .get()
    .then(onFetchDataSuccess, console.log);

  useEffect(() => { fetchPublishers(); }, []);

  const mapper = ManagePublisherMapper.curriedTableRow(dataHolder.startIndex);
  const publishersElement = useMemo(
    () => dataHolder.entityData.map(mapper),
    [dataHolder.entityData],
  );

  const sortByElements = useMemo(() => (
    <option value="name">Name</option>
  ), []);

  const setSortBy = (value: string) => {
    switch (value) {
      case 'name': {
        dataHolder.setSortBy(() => EntitySorter.byName);
        break;
      }
      default: dataHolder.setSortBy(EntitySorter.byName);
    }
  };

  const pageElements = useMemo(() => {
    const intRange = range(1, dataHolder.totalPage);
    const element = intRange.map((value) => (
      <option value={value}>{value}</option>
    ));

    return element;
  }, [dataHolder.totalPage]);

  return {
    curriedEntitiesElement: publishersElement,
    sortByElements,
    pageElements,
    refetchData: fetchPublishers,
    setQuery: dataHolder.setQuery,
    setPage: dataHolder.setPage,
    setShowsPerPage: dataHolder.setShowsPerPage,
    setSortBy,
    setSortOrder: dataHolder.setSortOrder,
  };
}
