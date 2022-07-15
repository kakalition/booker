import {
  Button,
  FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
} from '@chakra-ui/react';
import PaginationComponent from '../../../Components/Pagination/PaginationComponent';
import BasePage from '../../Components/BasePage';
import useManageAuthorViewModel from './ManageAuthorViewModel';
import ManageAuthorActions from './Parts/ManageAuthorActions';
import ManageAuthorHeader from './Parts/ManageAuthorHeader';
import ManageAuthorTable from './Parts/ManageAuthorTable';

export default function ManageAuthorPage() {
  const viewModel = useManageAuthorViewModel();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BasePage path="manage-author">
      <div className="w-full p-12">
        <ManageAuthorHeader />
        <ManageAuthorActions
          sortByElement={viewModel.sortByElement}
          onSubmit={viewModel.onSubmit}
          onCreateClick={onOpen}
        />
        <ManageAuthorTable tbodyElements={viewModel.authorsElement} />
        <PaginationComponent
          pageElement={viewModel.pageElement}
          onSubmit={viewModel.onSubmit}
        />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new author</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={viewModel.formik.handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="J.K. Rowling"
                  onChange={viewModel.formik.handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Birth Date</FormLabel>
                <Input
                  id="birth-date"
                  name="birth-date"
                  type="date"
                  placeholder="July 29, 2001"
                  onChange={viewModel.formik.handleChange}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </BasePage>
  );
}
