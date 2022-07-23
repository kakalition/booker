import BorrowerAPI from '../../../API/BorrowerAPI';
import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import useManageEntityDeletion from '../../../Components/ManageEntity/ManageEntityDeletion';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageBorrowerDialog from '../Borrower/Parts/ManageBorrowerDialog';
import useManageCheckInViewModel from './ManageCheckInViewModel';
import ManageCheckInTable from './Parts/ManageCheckInTable';

export default function ManageCheckInPage() {
  const { checkInData, fetchData } = useManageCheckInViewModel();

  const {
    modalElement, openEditDialog, openCreateDialog,
  } = useManageBorrowerDialog(
    fetchData,
    [],
    [],
  );

  const { AlertDialogElement, openDeleteDialog } = useManageEntityDeletion(
    'borrower',
    BorrowerAPI.destroy,
    fetchData,
  );

  const headerTitle = 'Manage Check In';
  const headerBody = 'You can see who come and go in the library and manage its data here.';

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={checkInData?.available_order}
          onCreateClick={openCreateDialog}
          fetchData={fetchData}
        />
        <ManageCheckInTable
          checkInData={checkInData?.data}
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
