import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import BasePage from '../../Components/BasePage';
import useManagePublisherViewModel from './ManagePublisherViewModel';

export default function ManagePublisherPage() {
  const viewModel = useManagePublisherViewModel();

  const headerTitle = 'Manage Publisher';
  const headerBody = 'You can see available publishers and create new publisher here.';

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={viewModel.sortByElement}
          onSubmit={viewModel.onSubmit}
          onCreateClick={() => null}
          setQuery={viewModel.setQuery}
          setSortBy={viewModel.setSortBy}
          setSortOrder={viewModel.setSortOrder}
        />
      </div>
    </BasePage>
  );
}
