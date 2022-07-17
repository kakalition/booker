import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageAuthorViewModel from './ManageAuthorViewModel';
import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import ManageAuthorTable from './Parts/ManageAuthorTable';
import useManageEntityDeletion from '../../../Components/ManageEntity/ManageEntityDeletion';
import AuthorAPI from '../../../API/AuthorAPI';
import useManageEntityDialog from '../../../Components/ManageEntity/ManageEntityDialog';
import ManageAuthorDialog from './Parts/ManageAuthorDialog';

export default function ManageAuthorPage() {
  const viewModel = useManageAuthorViewModel();

  const { openCreateDialog, openEditDialog, ModalComponent } = useManageEntityDialog(
    'Author',
    new ManageAuthorDialog(),
    viewModel.refetchData,
    AuthorAPI.post,
    AuthorAPI.edit,
  );

  const { openDeleteDialog, AlertDialogElement } = useManageEntityDeletion(
    'Author',
    (id: number) => AuthorAPI.destroy(id),
    viewModel.refetchData,
  );

  const headerTitle = 'Manage Author';
  const headerBody = 'You can see available authors and create new author here.';

  const tbodyElements = viewModel.curriedAuthorsElement.map(
    (element) => element(openEditDialog, openDeleteDialog),
  );

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={viewModel.sortByElement}
          onSubmit={viewModel.refetchData}
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
      {ModalComponent}
      <AlertDialogElement />
    </BasePage>
  );
}
