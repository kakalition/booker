import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageAuthorDeletion from './ManageAuthorDeletion';
import useManageAuthorDialog from './ManageAuthorDialog';
import useManageAuthorViewModel from './ManageAuthorViewModel';
import ManageAuthorActions from './Parts/ManageAuthorActions';
import ManageAuthorHeader from './Parts/ManageAuthorHeader';
import ManageAuthorTable from './Parts/ManageAuthorTable';

export default function ManageAuthorPage() {
  const viewModel = useManageAuthorViewModel();
  const {
    openCreateDialog, openEditDialog, ModalComponent,
  } = useManageAuthorDialog(viewModel.onSubmit);

  const { openDeleteDialog, alertDialogElement } = useManageAuthorDeletion(viewModel.onSubmit);

  const headerTitle = 'Manage Author';
  const headerBody = 'You can see available authors and create new author here.';

  const tbodyElements = viewModel.curriedAuthorsElement.map(
    (element) => element(openEditDialog, openDeleteDialog),
  );

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageAuthorActions
          sortByElement={viewModel.sortByElement}
          onSubmit={viewModel.onSubmit}
          onCreateClick={openCreateDialog}
          setQuery={viewModel.setQuery}
          setSortBy={viewModel.setSortBy}
          setSortOrder={viewModel.setSortOrder}
        />
        <ManageAuthorTable tbodyElements={tbodyElements} />
        <PaginationComponent
          pageElement={viewModel.pageElement}
          setPage={viewModel.setPage}
          setShowsPerPage={viewModel.setShowsPerPage}
        />
      </div>
      <ModalComponent />
      {alertDialogElement}
    </BasePage>
  );
}
