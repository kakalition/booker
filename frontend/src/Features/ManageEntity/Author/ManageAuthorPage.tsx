import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
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

  const tbodyElements = viewModel.authorsElement.map((element) => element(openEditDialog));

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageAuthorHeader />
        <ManageAuthorActions
          sortByElement={viewModel.sortByElement}
          onSubmit={viewModel.onSubmit}
          onCreateClick={openCreateDialog}
        />
        <ManageAuthorTable tbodyElements={tbodyElements} />
        <PaginationComponent
          pageElement={viewModel.pageElement}
          onSubmit={viewModel.onSubmit}
        />
      </div>
      <ModalComponent />
    </BasePage>
  );
}
