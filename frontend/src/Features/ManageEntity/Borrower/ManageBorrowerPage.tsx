import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import ManageBorrowerTable from './Parts/ManageBorrowerTable';

export default function ManageBorrowerPage() {
  const headerTitle = 'Manage Borrower Data';
  const headerBody = 'You can see who borrows books and create new borrower data here.';

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={null}
          onCreateClick={() => null}
          setQuery={() => null}
          setSortBy={() => null}
          setSortOrder={() => null}
        />
        <ManageBorrowerTable tbodyElements={null} />
        <PaginationComponent
          pageElement={null}
          setPage={() => null}
          setShowsPerPage={() => null}
        />
      </div>
    </BasePage>
  );
}
