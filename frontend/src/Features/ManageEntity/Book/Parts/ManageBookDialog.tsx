import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { useRef } from 'react';
import PublisherAPI from '../../../../API/PublisherAPI';
import ManageEntityDialog from '../../../../Functions/Interfaces/ManageEntityDialog';

export default class ManageBookDialog implements ManageEntityDialog {
  private nameRef = useRef<any>();

  public createPayload = () => ({
    name: this.nameRef.current.value,
  });

  public fetchData = (id: number, onFailed: (error: any) => void) => {
    const onFetchAuthorDataSuccess = (response: AxiosResponse) => {
      this.nameRef.current.value = response.data.name;
    };

    PublisherAPI
      .singleGet(id)
      .then(onFetchAuthorDataSuccess, onFailed);
  };

  public createModal = (
    isEdit: boolean,
    isOpen: boolean,
    onClose: () => void,
    editAuthor: () => void,
    postAuthor: () => void,
  ) => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`${isEdit ? 'Edit' : 'Create'} Book`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={this.nameRef}
                id="name"
                name="name"
                type="text"
                placeholder="J.K. Rowling"
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button colorScheme="blue" ml={3} onClick={isEdit ? editAuthor : postAuthor}>
            {isEdit ? 'Edit' : 'Create'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
