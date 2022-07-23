import { Input } from '@chakra-ui/react';
import moment from 'moment';
import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageCheckInViewModel from './ManageCheckInViewModel';
import useManageCheckInDialog from './Parts/ManageCheckInDialog';
import ManageCheckInTable from './Parts/ManageCheckInTable';

export default function ManageCheckInPage() {
  const viewModel = useManageCheckInViewModel();

  const { ModalElement, openModal } = useManageCheckInDialog(viewModel.fetchData);

  const headerTitle = 'Manage Check In';
  const headerBody = 'You can see who come and go in the library and manage its data here.';

  const dateElement = (sendRequest: () => void) => (
    <Input
      id="date"
      name="date"
      type="date"
      w="20%"
      defaultValue={moment().format('YYYY-MM-DD')}
      onChange={sendRequest}
    />
  );

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={viewModel.checkInData?.available_order}
          onCreateClick={openModal}
          fetchData={viewModel.fetchData}
          elementsBuilder={[dateElement]}
        />
        <ManageCheckInTable
          checkInData={viewModel.checkInData?.data}
          fetchData={viewModel.fetchData}
        />
        <PaginationComponent
          pageElement={null}
          setPage={() => null}
          setShowsPerPage={() => null}
        />
      </div>
      <ModalElement />
    </BasePage>
  );
}
