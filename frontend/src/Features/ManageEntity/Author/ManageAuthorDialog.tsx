import {
  Button, FormControl, FormLabel, Input, useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import BaseDialogComponent from '../../../Components/Dialog/BaseDialogComponent';

export default function useManageAuthorDialog(onSubmit: () => void) {
  const [isEdit, setIsEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const nameRef = useRef<any>();
  const dateRef = useRef<any>();

  const modalBodyComponent = (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          ref={nameRef}
          id="name"
          name="name"
          type="text"
          placeholder="J.K. Rowling"
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Birth Date</FormLabel>
        <Input
          ref={dateRef}
          id="birth-date"
          name="birth-date"
          type="date"
          placeholder="July 29, 2001"
        />
      </FormControl>
    </form>
  );

  const modalFooterComponent = (
    <>
      <Button variant="ghost" onClick={onClose}>Cancel</Button>
      <Button colorScheme="blue" ml={3} onClick={onClose}>
        Save
      </Button>
    </>
  );

  const modal = () => (
    <BaseDialogComponent
      isOpen={isOpen}
      onClose={onClose}
      title={isEdit ? 'Edit author' : 'Create new author'}
      modalBodyComponent={modalBodyComponent}
      modalFooterComponent={modalFooterComponent}
    />
  );

  const openCreateDialog = () => {
    setIsEdit(false);
    onOpen();
  };

  const openEditDialog = () => {
    setIsEdit(true);
    onOpen();
  };

  return {
    openCreateDialog,
    openEditDialog,
    ModalComponent: modal,
  };
}
