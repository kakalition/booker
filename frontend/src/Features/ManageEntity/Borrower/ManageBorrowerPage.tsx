import axios from 'axios';
import {
  useEffect, useState,
} from 'react';
import BorrowerAPI from '../../../API/BorrowerAPI';
import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import useManageEntityDeletion from '../../../Components/ManageEntity/ManageEntityDeletion';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageBorrowerDialog from './Parts/ManageBorrowerDialog';
import ManageBorrowerTable from './Parts/ManageBorrowerTable';

export default function useManageBorrowerPage() {
  const [borrowerData, setBorrowerData] = useState<any>();

  const fetchData = () => axios
    .get('/api/borrowers')
    .then((response) => setBorrowerData(response.data));

  const {
    modalElement, openEditDialog, openCreateDialog,
  } = useManageBorrowerDialog(
    fetchData,
    borrowerData?.book_data,
    borrowerData?.visitor_data,
  );

  const { AlertDialogElement, openDeleteDialog } = useManageEntityDeletion(
    'borrower',
    BorrowerAPI.destroy,
    fetchData,
  );

  useEffect(() => { fetchData(); }, []);

  const headerTitle = 'Manage Borrower Data';
  const headerBody = 'You can see who borrows books and create new borrower data here.';

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={null}
          onCreateClick={openCreateDialog}
          setQuery={() => null}
          setSortBy={() => null}
          setSortOrder={() => null}
        />
        <ManageBorrowerTable
          borrowersData={borrowerData?.data}
          openEditDialog={openEditDialog}
          openDeleteDialog={openDeleteDialog}
        />
        <PaginationComponent
          pageElement={null}
          setPage={() => null}
          setShowsPerPage={() => null}
        />
      </div>
      {modalElement}
      <AlertDialogElement />
    </BasePage>
  );
}
