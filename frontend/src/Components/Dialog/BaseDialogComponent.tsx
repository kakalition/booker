import {
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

type Params = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  modalBodyComponent: React.ReactNode,
  modalFooterComponent: React.ReactNode
};

export default function BaseDialogComponent(params: Params) {
  const {
    isOpen, onClose, title, modalBodyComponent, modalFooterComponent,
  } = params;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {modalBodyComponent}
        </ModalBody>
        <ModalFooter>
          {modalFooterComponent}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
