import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageAuthorViewModel from './ManageAuthorViewModel';
import ManageAuthorActions from './Parts/ManageAuthorActions';
import ManageAuthorHeader from './Parts/ManageAuthorHeader';
import ManageAuthorTable from './Parts/ManageAuthorTable';

export default function ManageAuthorPage() {
  const viewModel = useManageAuthorViewModel();

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageAuthorHeader />
        <ManageAuthorActions
          sortByElement={viewModel.sortByElement}
          onSubmitQuery={viewModel.onSubmitQuery}
        />
        <ManageAuthorTable tbodyElements={viewModel.authorsElement} />
        <PaginationComponent pageElement={viewModel.pageElement} />
      </div>
    </BasePage>
  );
}
