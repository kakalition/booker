import { useRef } from 'react';
import { AxiosResponse } from 'axios';
import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';
import AuthorAPI from '../../../../API/AuthorAPI';
import ManageEntityDialog from '../../../../Functions/Interfaces/ManageEntityDialog';
import HtmlHelper from '../../../../Functions/Helpers/HtmlHelper';

export default class ManageAuthorDialog implements ManageEntityDialog {
  private nameRef = useRef<any>();

  private dateRef = useRef<any>();

  public createPayload = () => ({
    name: this.nameRef.current.value,
    birth_date: this.dateRef.current.value,
  });

  public createModal = (
    isEdit: boolean,
    isOpen: boolean,
    onClose: () => void,
    editEntity: () => void,
    postEntity: () => void,
  ) => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`${isEdit ? 'Edit' : 'Create'} Author`}</ModalHeader>
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
            <FormControl mt={4}>
              <FormLabel>Birth Date</FormLabel>
              <Input
                ref={this.dateRef}
                id="birth-date"
                name="birth-date"
                type="date"
                placeholder="July 29, 2001"
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button colorScheme="blue" ml={3} onClick={isEdit ? editEntity : postEntity}>
            {isEdit ? 'Edit' : 'Create'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  fetchData: (id: number, onFailed: (error: any) => void) => void = (id, onFailed) => {
    const onFetchSuccess = (response: AxiosResponse) => {
      this.nameRef.current.value = response.data.name;
      this.dateRef.current.value = HtmlHelper.jsonToHtmlDate(response.data.birth_date);
    };

    AuthorAPI
      .singleGet(id)
      .then(onFetchSuccess, onFailed);
  };
}
