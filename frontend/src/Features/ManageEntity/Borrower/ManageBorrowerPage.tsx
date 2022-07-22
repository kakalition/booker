import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Select,
  Td, Tr, useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import ManageEntityActions from '../../../Components/ManageEntity/ManageEntityActions';
import ManageEntityHeader from '../../../Components/ManageEntity/ManageEntityHeader';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import HManageBorrowerDialog from './Parts/HManageBorrowerDialog';
import ManageBorrowerTable from './Parts/ManageBorrowerTable';

// Abstract this away
export default function ManageBorrowerPage() {
  const [borrowerData, setBorrowerData] = useState<any>();

  const fetchData = () => axios
    .get('/api/borrowers')
    .then((response) => setBorrowerData(response.data));

  const {
    modalElement, openEditDialog, openCreateDialog,
  } = HManageBorrowerDialog(
    fetchData,
    borrowerData?.book_data,
    borrowerData?.visitor_data,
  );

  useEffect(() => { fetchData(); }, []);

  const headerTitle = 'Manage Borrower Data';
  const headerBody = 'You can see who borrows books and create new borrower data here.';

  return (
    <BasePage path="manage-publisher">
      <div className="w-full p-12">
        <ManageEntityHeader title={headerTitle} body={headerBody} />
        <ManageEntityActions
          sortByElement={null}
          onCreateClick={openCreateDialog}
          setQuery={() => null}
          setSortBy={() => null}
          setSortOrder={() => null}
        />
        <ManageBorrowerTable
          borrowersData={borrowerData?.data}
          openEditDialog={openEditDialog}
        />
        <PaginationComponent
          pageElement={null}
          setPage={() => null}
          setShowsPerPage={() => null}
        />
      </div>
      {modalElement}
    </BasePage>
  );
}
