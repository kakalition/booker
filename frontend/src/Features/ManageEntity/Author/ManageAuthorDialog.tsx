import {
  Button, FormControl, FormLabel, Input, useDisclosure, useToast,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { AxiosResponse } from 'axios';
import BaseDialogComponent from '../../../Components/Dialog/BaseDialogComponent';
import AuthorAPI from '../../../API/AuthorAPI';
import HtmlHelper from '../../../Functions/Helpers/HtmlHelper';

export default function useManageAuthorDialog(onSubmit: () => void) {
  const [isEdit, setIsEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const nameRef = useRef<any>();
  const dateRef = useRef<any>();

  const onPostAuthorSuccess = (response: AxiosResponse) => {
    if (response.status === 201) {
      onClose();
      onSubmit();
      toast({ title: 'Author Created!', status: 'success', position: 'top' });
    } else {
      onClose();
      console.log(response);
    }
  };

  const onPostAuthorFailed = (error: any) => {
    onClose();
    onSubmit();
    toast({
      title: 'Failed to Create Author!', description: error.response.data.message, status: 'error', position: 'top',
    });
  };

  const postAuthor = () => {
    const payload = {
      name: nameRef.current.value,
      birth_date: dateRef.current.value,
    };

    AuthorAPI
      .post(payload)
      .then(onPostAuthorSuccess, onPostAuthorFailed);
  };

  const modalBodyComponent = (
    <form>
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
      <Button colorScheme="blue" ml={3} onClick={postAuthor}>
        {isEdit ? 'Edit' : 'Create'}
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

  const onFetchAuthorDataSuccess = (response: AxiosResponse) => {
    nameRef.current.value = response.data.name;
    dateRef.current.value = HtmlHelper.jsonToHtmlDate(response.data.birth_date);
  };

  const onFetchAuthorDataFailed = (error: any) => {
    toast({
      title: 'Failed to Get Author Data!', description: error.response.data.message, status: 'error', position: 'top',
    });
    onClose();
  };

  const fetchAuthorData = (id: number) => AuthorAPI
    .singleGet(id)
    .then(onFetchAuthorDataSuccess, onFetchAuthorDataFailed);

  const openEditDialog = (id: number) => {
    setIsEdit(true);
    onOpen();
    fetchAuthorData(id);
  };

  return {
    openCreateDialog,
    openEditDialog,
    ModalComponent: modal,
  };
}
