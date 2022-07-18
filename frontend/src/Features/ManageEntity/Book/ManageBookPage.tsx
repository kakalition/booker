import PublisherAPI from '../../../API/PublisherAPI';
import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import useManageEntityDeletion from '../../../Components/ManageEntity/ManageEntityDeletion';
import useManageEntityDialog from '../../../Components/ManageEntity/ManageEntityDialog';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageBookViewModel from './ManageBookViewModel';
import ManageBookDialog from './Parts/ManageBookDialog';
import ManageBookTable from './Parts/ManageBookTable';

export default function ManageBookPage() {
  const viewModel = useManageBookViewModel();

  const { openCreateDialog, openEditDialog, ModalComponent } = useManageEntityDialog(
    'Book',
    new ManageBookDialog(),
    viewModel.refetchData,
    PublisherAPI.post,
    PublisherAPI.edit,
  );

  const { AlertDialogElement, openDeleteDialog } = useManageEntityDeletion(
    'Publisher',
    (id: number) => PublisherAPI.destroy(id),
    viewModel.refetchData,
  );

  const headerTitle = 'Manage Book';
  const headerBody = 'You can see available books and create new book here.';

  const tbodyElements = viewModel.curriedEntitiesElement.map(
    (element) => element(openEditDialog, openDeleteDialog),
  );

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={viewModel.sortByElements}
          onCreateClick={openCreateDialog}
          setQuery={viewModel.setQuery}
          setSortBy={viewModel.setSortBy}
          setSortOrder={viewModel.setSortOrder}
        />
        <ManageBookTable tbodyElements={tbodyElements} />
        <PaginationComponent
          pageElement={viewModel.pageElements}
          setPage={viewModel.setPage}
          setShowsPerPage={viewModel.setShowsPerPage}
        />
      </div>
      <AlertDialogElement />
      {ModalComponent}
    </BasePage>
  );
}
