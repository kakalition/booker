import SortOrder from '../../Types/SortOrder';

type ManageEntityViewModel = {
  curriedEntitiesElement: ((
    onEditClick: (id: number) => void,
    onDeleteClick: (id: number) => void
  ) => React.ReactNode)[],
  sortByElements: React.ReactNode,
  pageElements: React.ReactNode,
  refetchData: () => void,
  setQuery: (query: string) => void,
  setPage: (page: number) => void,
  setShowsPerPage: (total: number) => void,
  setSortBy: (sort: string) => void,
  setSortOrder: (sortOrder: SortOrder) => void,
};

export default ManageEntityViewModel;
