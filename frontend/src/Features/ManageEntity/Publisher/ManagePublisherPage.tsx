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
    viewModel.onSubmit,
    PublisherAPI.post,
    PublisherAPI.edit,
  );

  const { AlertDialogElement, openDeleteDialog } = useManageEntityDeletion(
    'Publisher',
    (id: number) => PublisherAPI.destroy(id),
    viewModel.onSubmit,
  );

  const headerTitle = 'Manage Publisher';
  const headerBody = 'You can see available publishers and create new publisher here.';

  const tbodyElements = viewModel.curriedAuthorsElement.map(
    (element) => element(openEditDialog, openDeleteDialog),
  );

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={viewModel.sortByElement}
          onSubmit={viewModel.onSubmit}
          onCreateClick={openCreateDialog}
          setQuery={viewModel.setQuery}
          setSortBy={viewModel.setSortBy}
          setSortOrder={viewModel.setSortOrder}
        />
        <ManagePublisherTable tbodyElements={tbodyElements} />
        <PaginationComponent
          pageElement={viewModel.pageElement}
          setPage={viewModel.setPage}
          setShowsPerPage={viewModel.setShowsPerPage}
        />
      </div>
      <AlertDialogElement />
      {ModalComponent}
    </BasePage>
  );
}
