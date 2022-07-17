import PublisherAPI from '../../../API/PublisherAPI';
import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import useManageEntityDeletion from '../../../Components/ManageEntity/ManageEntityDeletion';
import useManageEntityDialog from '../../../Components/ManageEntity/ManageEntityDialog';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManagePublisherViewModel from './ManagePublisherViewModel';
import ManagePublisherDialog from './Parts/ManagePublisherDialog';
import ManagePublisherTable from './Parts/ManagePublisherTable';

export default function ManagePublisherPage() {
  const viewModel = useManagePublisherViewModel();

  const { openCreateDialog, openEditDialog, ModalComponent } = useManageEntityDialog(
    'Publisher',
    new ManagePublisherDialog(),
    viewModel.refetchData,
    PublisherAPI.post,
    PublisherAPI.edit,
  );

  const { AlertDialogElement, openDeleteDialog } = useManageEntityDeletion(
    'Publisher',
    (id: number) => PublisherAPI.destroy(id),
    viewModel.refetchData,
  );

  const headerTitle = 'Manage Publisher';
  const headerBody = 'You can see available publishers and create new publisher here.';

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
        <ManagePublisherTable tbodyElements={tbodyElements} />
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
