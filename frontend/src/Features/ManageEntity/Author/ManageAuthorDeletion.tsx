import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  useToast,
  Button,
} from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import React, { useRef, useState } from 'react';
import AuthorAPI from '../../../API/AuthorAPI';

export default function useManageAuthorDeletion(onSubmit: () => void) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tempId, setTempId] = useState(-1);
  const cancelRef = useRef<any>();
  const toast = useToast();

  const onDeleteSuccess = (response: AxiosResponse) => {
    if (response.status === 204) {
      onClose();
      onSubmit();
      toast({ title: 'Author Deleted!', status: 'success', position: 'top' });
    } else {
      onClose();
      console.log(response);
    }
  };

  const onDeleteFailed = (error: any) => {
    onClose();
    onSubmit();
    toast({
      title: 'Failed to Create Author!', description: error.response.data.message, status: 'error', position: 'top',
    });
  };

  const deleteAuthor = () => {
    AuthorAPI
      .destroy(tempId)
      .then(onDeleteSuccess, onDeleteFailed);
  };

  const alertDialogElement = (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Author
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={deleteAuthor} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );

  const openDeleteDialog = (id: number) => {
    setTempId(id);
    onOpen();
  };

  return {
    openDeleteDialog,
    alertDialogElement,
  };
}
